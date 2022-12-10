import readlineSync from 'readline-sync';
import randomNum from '../random-num.js';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let counter = 0;

  for (let i = 0; i !== 3; i += 1) {
    const result = [];
    const progressionNum = randomNum();
    const randomItem = randomNum();

    // eslint-disable-next-line no-shadow
    for (let i = 1; i < 11; i += 1) {
      result[0] = progressionNum;
      result[i] = result[i - 1] + progressionNum;
    }
    const correctAnswer = Number(result[randomItem]);
    result[randomItem] = '..';
    const newArr = result.slice(1).join(' ');

    console.log(`Question: ${newArr}`);
    const answer = Number(readlineSync.question('You answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default progression;
