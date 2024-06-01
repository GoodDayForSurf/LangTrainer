import { DATA } from './eng.js';

let PHRASES = [];

const $ = selector => document.querySelector(selector);

async function load() {
   PHRASES = DATA.split("\n\n");
}

function randomPhrase() {
   return PHRASES[Math.round(Math.random() * PHRASES.length)];
}

class CardState {
   question = '';
   answers = [];
   answersForShow = 0;
   repeatQueue = [];
   currentRepeatItem = null;

   getItemFromRepeatQueue() {
      const stages = {
         1: 5,
         2: 25,
         3: 120,
         4: 600,
         5: 3600
      };

      return this.repeatQueue.find(item => Date.now() - item.showTime <= 1000 * stages[item.stage]);
   }

   addItemToRepeatQueue() {
      let item = this.repeatQueue.find(item => item.question === this.question);

      if(!item) {
         item = {
            question: this.question,
            answers: this.answers,
            stage: 0,
         }
      }

      item.stage++;
      item.showTime = Date.now();

      this.repeatQueue.push(item);
   }

   initNewQuestion() {
      const repeatItem = this.getItemFromRepeatQueue();
      [this.question, ...this.answers] = repeatItem
          ? [repeatItem.question, repeatItem.answers]
          : randomPhrase().split("\n");

      $('#question').innerText = this.question;
      $('#answer').innerText = '';

      this.answersForShow = this.answers.length;
   }

   showAnswer() {
      const [answer, comment] = this.answers.at(-this.answersForShow).split("//");
      $('#answer').innerHTML = `<div>${answer}</div>` + (comment ? `<comment>${comment || ''}</comment>` : '');
      this.answersForShow--;
   }

   next(){
      if (this.answersForShow === 0 ) {
         this.addItemToRepeatQueue();
         this.initNewQuestion();
      } else {
         this.showAnswer();
      }
   }
}

load().then( () => {
   const cardState = new CardState();
   $('#app').addEventListener('click', () => cardState.next());
   document.addEventListener("keyup", function(event) {
      if (event.code === "Space") {
         cardState.next();
      }
   });

   cardState.next();
})
