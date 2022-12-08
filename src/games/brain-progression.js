import readlineSync from "readline-sync";
import getArrRandomNumProgression from "../random-arr-progerssion.js";
import randomNum from "../random-num.js";

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');


  let counter = 0
  for (let i = 0; i < 3; i+=1) {
    console.log('Question: ' + getArrRandomNumProgression(randomNum()));
    const answer = readlineSync.question('You answer: ');

    if (answer === randomNum()) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== randomNum()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNum()}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }

};

progression();