let PHRASES = [];
const dictionaries = [
  {
     name: "English", file: "eng.txt"
  },
   {
      name: "Spanish basic", file: "esp-basic.txt"
   },
   {
      name: "Spanish basic 2", file: "esp-basic-2.txt"
   },
   {
      name: "Spanish advanced", file: "esp-adv.txt"
   },
   {
      name: "Spanish 100 verbs for I", file: "esp-100verbs-yo.txt"
   },
   {
      name: "Armenian", file: "am.txt"
   }
]
const $ = selector => document.querySelector(selector);

async function load() {
   restoreState();
   window.addEventListener('beforeunload', () => {
      try { saveState(); } catch(e) {}
   });
}

function getAnswersForQuestion(question) {
  try {
    if (!question) return [];
    const entry = PHRASES.find(text => text.startsWith(question + '\n'));
    if (!entry) return [];
    const parts = entry.split("\n");
    return parts.slice(1);
  } catch(e) {
    return [];
  }
}

const STORAGE_NS = 'langtrainer_state_v2';
const SELECTED_DICT_KEY = `${STORAGE_NS}:selected`;

function getStateKey(dictFile) {
  return `${STORAGE_NS}:dict:${dictFile || 'unknown'}`;
}

function saveState() {
  try {
    const dictionariesSelectEl = $('#dictionaries-select');
    const dictFile = dictionariesSelectEl ? dictionariesSelectEl.value : null;
    if (!dictFile) return;

    const state = cardState ? {
      question: cardState.question,
      // do not persist answers; they will be rebuilt from dictionary
      answersForShow: cardState.answersForShow,
      // persist only required fields for repeatQueue
      repeatQueue: Array.isArray(cardState.repeatQueue)
        ? cardState.repeatQueue.map(item => ({
            question: item.question,
            stage: item.stage,
            showTime: item.showTime
          }))
        : []
    } : null;

    localStorage.setItem(getStateKey(dictFile), JSON.stringify(state));
    localStorage.setItem(SELECTED_DICT_KEY, dictFile);
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

function restoreState() {
  try {
    const dictionariesSelectEl = $('#dictionaries-select');
    const selected = localStorage.getItem(SELECTED_DICT_KEY);
    if (dictionariesSelectEl && selected) {
      dictionariesSelectEl.value = selected;
    }

    // Prefer saved selection; fallback to current select value
    const dictFile = selected || (dictionariesSelectEl ? dictionariesSelectEl.value : null);
    if (!dictFile) return false;

    const raw = localStorage.getItem(getStateKey(dictFile));
    if (!raw) return false;
    const state = JSON.parse(raw);
    if (!state) return false;

    cardState = new CardState();
    cardState.question = state.question || '';
    // answers will be rebuilt after dictionary is loaded
    cardState.answers = [];
    cardState.answersForShow = typeof state.answersForShow === 'number' ? state.answersForShow : 0;
    cardState.repeatQueue = Array.isArray(state.repeatQueue) ? state.repeatQueue : [];

    if (cardState.question) {
      $('#question').innerText = cardState.question;
      $('#answer').innerText = '';
    }

    return true;
  } catch (e) {
    console.warn('Failed to restore state', e);
    return false;
  }
}

function randomPhrase() {
   return PHRASES[Math.round(Math.random() * PHRASES.length)];
}
let cardState;

class CardState {
   stages = {
      1: 5,
      2: 25,
      3: 120,
      4: 600,
      5: 3600 * 3,
      6: 3600 * 10,
      7: 3600 * 25,
      8: 3600 * 24 * 3
   };
   question = '';
   answers = [];
   answersForShow = 0;
   repeatQueue = [];

   getItemFromRepeatQueue() {
      this.repeatQueue = this.repeatQueue.reduce((res, item) => {
         if ( Math.random() > 0.5 ) {
            res.push(item);
         } else {
            res = [item].concat(res);
         }
         return res;
      }, []);

      return this.repeatQueue.find(item => {
         const period = (Date.now() - item.showTime) / 1000;
         return  period > (this.stages[item.stage] || (3600 * 24 * 7))
      });
   }

   addItemToRepeatQueue() {
      if(!this.question) return;

      let item = this.repeatQueue.find(item => item.question.indexOf(this.question) === 0);

      if(!item) {
         item = {
            question: this.question,
            stage: 0,
         }

         this.repeatQueue.push(item);

         PHRASES = PHRASES.reduce((acc, text) => {
            if(!text.startsWith(this.question + '\n')) {
               acc.push(text);
            } else {
               console.log('----ITEM REMOVED FROM PHRASES------>');
            }

            return acc;
         }, []);
      }

      item.showTime = Date.now();

      if ((Date.now() - item.showTime) / 1000 > 2 * this.stages[item.stage]) {
         return;
      }

      item.stage++;

      console.log('------addItemToRepeatQueue---->', item);
      saveState();
   }

   initNewQuestion() {
      const repeatItem = this.getItemFromRepeatQueue();
      if (repeatItem) {
         this.question = repeatItem.question;
         this.answers = getAnswersForQuestion(this.question);
      } else {
         const parts = randomPhrase().split("\n");
         this.question = parts[0] || '';
         this.answers = parts.slice(1);
      }

      $('#question').innerText = this.question;
      $('#answer').innerText = '';

      this.answersForShow = this.answers.length;
      saveState();
   }

   showAnswer() {
      console.log('---showAnswer------->', [this.answers, this.answersForShow, this.answers.at(-this.answersForShow)])
      const [answer, comment] = this.answers.at(-this.answersForShow).split("//");
      $('#answer').innerHTML = `<div>${answer}</div>` + (comment ? `<comment>${comment || ''}</comment>` : '');
      this.answersForShow--;
      saveState();
   }

   next(){
      if(PHRASES.length < 1) {
         return
      }
      
      if (this.answersForShow === 0 ) {
         this.initNewQuestion();
      } else {
         this.showAnswer();

         if(this.answersForShow === 0) {
            this.addItemToRepeatQueue();
         }
      }
   }
}

async function initDictionary(path) {
   const resp = await fetch(path);
   
   const DATA = await resp.text();
   
   PHRASES = DATA.split(/\n\r?\n\r?/);
}

load().then( () => {
   
   const dictionariesSelectEl = $('#dictionaries-select');
   let optionsHTML = dictionariesSelectEl.innerHTML;

   dictionaries.forEach((dict) => {
      optionsHTML +=`<option value="${dict.file}">${dict.name}</option>`;
   });

   dictionariesSelectEl.innerHTML = optionsHTML;

  // ensure select reflects restored value if present
  try {
    const savedDict = localStorage.getItem(SELECTED_DICT_KEY);
    if (savedDict) {
      dictionariesSelectEl.value = savedDict;
    }
  } catch(e) { }

  // Always load PHRASES from the selected dictionary on startup
  if (dictionariesSelectEl.value) {
    initDictionary(dictionariesSelectEl.value).then(() => {
      // If we already restored any state, keep it; only create if none exists
      if (!cardState) {
        cardState = new CardState();
        // if a question exists from restore, rebuild answers; otherwise start fresh
        if (cardState.question) {
          cardState.answers = getAnswersForQuestion(cardState.question);
        } else {
          cardState.next();
        }
        saveState();
      }
    });
  }

  $('#dictionaries-select').addEventListener('change', (e) => {
    const dictFile = e.target.value;
    if (!dictFile) return;

    // Persist selection immediately
    try { localStorage.setItem(SELECTED_DICT_KEY, dictFile); } catch(e) {}

    initDictionary(dictFile).then(() => {
      // Try restore state for this dictionary
      const raw = localStorage.getItem(getStateKey(dictFile));
      if (raw) {
        try {
          const state = JSON.parse(raw);
          cardState = new CardState();
          cardState.question = state.question || '';
          // rebuild answers from dictionary
          cardState.answers = getAnswersForQuestion(cardState.question);
          cardState.answersForShow = typeof state.answersForShow === 'number' ? state.answersForShow : 0;
          cardState.repeatQueue = Array.isArray(state.repeatQueue) ? state.repeatQueue : [];
          if (cardState.question) {
            $('#question').innerText = cardState.question;
            $('#answer').innerText = '';
          } else {
            // No current question: keep restored queues; UI will generate on next action
            $('#question').innerText = '';
            $('#answer').innerText = '';
          }
          return;
        } catch(e) { /* fall through to fresh start */ }
      }

      // Fresh start if no saved state
      cardState = new CardState();
      cardState.next();
      saveState();
    });
  });
   
   $('#card').addEventListener('click', () => cardState.next());
   document.addEventListener("keyup", function(event) {
      if (event.code === "Space") {
         cardState.next();
      }
   });
   

  // cardState.next();
})
