import readlineSync from 'readline-sync';
import randomNum from "../random-num.js";
import nod from "../NOD.js";

const gsd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;

  for (let i = 0; i < 3; i+=1) {
    let leftNum = randomNum();
    let rightNum = randomNum();
    let result = nod(leftNum, rightNum)
    console.log(`Question: ${leftNum} ${rightNum}`);

    const answer = Number(readlineSync.question('Your answer: '));
    nod(leftNum, rightNum);

    if (answer === result) {
      console.log('Correct!');
      counter += 1
    } else if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gsd;