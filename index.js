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

   initNewQuestion() {
      [this.question, ...this.answers] = randomPhrase().split("\n");
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
