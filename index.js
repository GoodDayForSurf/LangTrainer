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
   window.addEventListener('beforeunload', () => {
      try { saveState(); } catch(e) {}
   });
}

const STORAGE_KEY = 'langtrainer_state_v1';

function saveState() {
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

    return cardState;
  } catch (e) {
    console.warn('Failed to restore state', e);
    return false;
  }
}

function randomPhrase() {
   let phrase = PHRASES[Math.round(Math.random() * PHRASES.length)];
   
   while(cardState.repeatQueue.find(({question}) => question == phrase)) {
       phrase = PHRASES[Math.round(Math.random() * PHRASES.length)];
   }
 
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

const stages = {
    1: 5,
    2: 25,
    3: 120,
    4: 600,
    5: 3600 * 3,
    6: 3600 * 10,
    7: 3600 * 25,
    8: 3600 * 24 * 3
};

class CardState {

   question = '';
   answers = [];
   answersForShow = 0;
   repeatQueue = [];

   getItemFromRepeatQueue() {
      this.repeatQueue = shuffleQueue(this.repeatQueue);

      return this.repeatQueue.find(item => {
         const period = (Date.now() - item.showTime) / 1000;
         return  period > stages[item.stage] || (period > 3600 * 24 * 7 && Math.random() > 0.5)
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
      }

      item.showTime = Date.now();

      if ((Date.now() - item.showTime) / 1000 > 2 * stages[item.stage]) {
         return;
      }

      item.stage++;

      console.log('------addItemToRepeatQueue---->', item);
      saveState();
   }

   getNewQuestion() {
      const repeatItem = this.getItemFromRepeatQueue();

       if (repeatItem) {
           this.question = repeatItem.question;
           this.answers = getAnswersForQuestion(this.question);
       } 
       
       if(!repeatItem || !this.answers) {
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
