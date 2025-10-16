let PHRASES = [];
let NEW_PHRASES = [];

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

const stages = {
    1: 7,
    2: 30,
    3: 180,
    4: 600,
    5: 3600 * 3,
    6: 3600 * 10,
    7: 3600 * 25,
    8: 3600 * 24 * 3
};

async function load() {
   window.addEventListener('beforeunload', () => {
      try { saveState(); } catch(e) {}
   });
}

const STORAGE_KEY = 'langtrainer_state_v1';

function saveState() {
    if (!(cardState.repeatQueue?.length > 1)) {
        return;
    }
    
    try {
        const dictionariesSelectEl = $('#dictionaries-select');
        const state = {
            dictFile: dictionariesSelectEl.value,
            cardState: cardState ? {
                question: cardState.question,
                repeatQueue: cardState.repeatQueue
            } : null
        };
        localStorage.setItem(STORAGE_KEY + '-' + dictionariesSelectEl.value, JSON.stringify(state));
    } catch (e) {
        console.warn('Failed to save state', e);
    }
}

function restoreState() {
  try {
    const dictFileName = $('#dictionaries-select').value;
    const raw = localStorage.getItem(STORAGE_KEY + '-' + dictFileName);
    cardState = new CardState();
    
    if (!raw) return cardState;
    
    const state = JSON.parse(raw);
    
    if (state.cardState) {
      cardState.question = state.cardState.question || '';
      cardState.answers = getAnswersForQuestion(cardState.question);
      cardState.answersForShow = 0;
      cardState.repeatQueue = Array.isArray(state.cardState.repeatQueue) ? state.cardState.repeatQueue : [];
    }

      cardState.repeatQueue.forEach(({ question }) => {
          const index = PHRASES.findIndex((p) => p.startsWith(question));

          if (index !== -1) {
              NEW_PHRASES = [...PHRASES];
              NEW_PHRASES.splice(index, 1)[0];
          }
          console.log('-----PHRASES----->', NEW_PHRASES);
      });
    
    return cardState;
  } catch (e) {
    console.warn('Failed to restore state', e);
    return false;
  }
}

function randomPhrase() {
   let phrase = NEW_PHRASES.length ? NEW_PHRASES[Math.round(Math.random() * (PHRASES.length - 1))] : null;
   
   return phrase;
}
let cardState;

function getAnswersForQuestion(question) {
    const entry = PHRASES.find(text => text.startsWith(question + '\n'));
    
    if(!entry) {
        cardState.repeatQueue = cardState.repeatQueue.filter((item) => item.question !== question);
        
        return null;
    }
    
    return entry.split("\n").slice(1);
}

function shuffleQueue(queue) {
    return queue.reduce((res, item) => {
        if ( Math.random() > 0.5 ) {
            res.push(item);
        } else {
            res = [item].concat(res);
        }
        return res;
    }, []);
}

function getItemSecondsPeriod(item) {
    return (Date.now() - item.showTime) / 1000;
}

class CardState {

   question = '';
   answers = [];
   answersForShow = 0;
   repeatQueue = [];

   getItemFromRepeatQueue() {
       if (NEW_PHRASES.length === 0) {
           return this.repeatQueue[Math.round(this.repeatQueue.length * Math.random()) - 1];
       }
       
      return this.repeatQueue.find(item => item.stage < 9 && getItemSecondsPeriod(item) > stages[item.stage]) 
        || (Math.random() > 0.6 && this.repeatQueue.find(item => getItemSecondsPeriod(item) >= 3600 * 24 * 4))
   }

   addItemToRepeatQueue() {
      if(!this.question) return;

      let item = this.repeatQueue.find(item => item.question.indexOf(this.question) === 0);

      if(!item) {
         item = {
            question: this.question,
            stage: 0,
         }

         this.repeatQueue = [item].concat(shuffleQueue(this.repeatQueue));
      }

      item.showTime = Date.now();

      if ((Date.now() - item.showTime) / 1000 > 2 * stages[item.stage]) {
         return;
      }

      item.stage++;

      console.log('------addItemToRepeatQueue---->', item);
      saveState();
      document.querySelector('#queue-size').textContent = cardState.repeatQueue.length;
   }

   getNewQuestion() {
      const repeatItem = this.getItemFromRepeatQueue();
      
       if (repeatItem) {
           this.question = repeatItem.question;
           this.answers = getAnswersForQuestion(this.question);
           console.log('-----item from queue----->', this.question, [repeatItem.stage, (Date.now() - repeatItem.showTime) / (1000 * (repeatItem.stage > 3 ? 60*60 : 60)), repeatItem.stage > 3 ? 'h' : 'm'])
       } 
       
       if(!repeatItem || !this.answers) {
           const parts = randomPhrase()?.split("\n");
           
           if(parts) {
               this.question = parts[0] || '';
               this.answers = parts.slice(1);
               console.log('----NEW-item for queue----->',this.question);
           }
           
       }

      $('#question').innerText = this.question;
      $('#answer').innerText = '';

      this.answersForShow = this.answers.length;
      saveState();
   }

   showAnswer() {
      const [answer, comment] = this.answers.at(-this.answersForShow).split("//");
      $('#answer').innerHTML = `<div>${answer}</div>` + (comment ? `<comment>${comment || ''}</comment>` : '');
      this.answersForShow--;
      saveState();
   }

   next(){
      if(NEW_PHRASES.length < 1) {
         return
      }
      
      if (this.answersForShow === 0 ) {
         this.getNewQuestion();
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
    document.querySelector('#dict-size').textContent = PHRASES.length;
}

load().then( () => {
   
   const dictionariesSelectEl = $('#dictionaries-select');
   let optionsHTML = dictionariesSelectEl.innerHTML;

   dictionaries.forEach((dict) => {
      optionsHTML +=`<option value="${dict.file}">${dict.name}</option>`;
   });

   dictionariesSelectEl.innerHTML = optionsHTML;


    $('#dictionaries-select').addEventListener('change', (e) => {
        if(!e.target.value) {
            return
        }

        initDictionary(e.target.value).then(() => {
            cardState = restoreState();
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
