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
            answers: this.answers,
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
   }

   initNewQuestion() {
      const repeatItem = this.getItemFromRepeatQueue();
console.log('------initNewQuestion---->', repeatItem);

      [this.question, ...this.answers] = repeatItem
          ? [repeatItem.question, ...repeatItem.answers]
          : randomPhrase().split("\n");

      $('#question').innerText = this.question;
      $('#answer').innerText = '';

      this.answersForShow = this.answers.length;
   }

   showAnswer() {
      console.log('---showAnswer------->', [this.answers, this.answersForShow, this.answers.at(-this.answersForShow)])
      const [answer, comment] = this.answers.at(-this.answersForShow).split("//");
      $('#answer').innerHTML = `<div>${answer}</div>` + (comment ? `<comment>${comment || ''}</comment>` : '');
      this.answersForShow--;
   }

   next(){
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

load().then( () => {
   const cardState= new CardState();

   $('#app').addEventListener('click', () => cardState.next());
   document.addEventListener("keyup", function(event) {
      if (event.code === "Space") {
         cardState.next();
      }
   });

   cardState.next();
})
