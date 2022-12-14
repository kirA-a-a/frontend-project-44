import readlineSync from 'readline-sync';
import randomNum from '../random-num.js';
import randomMath from '../random-math.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  let counter = 0;

  for (let i = 0; i < 3; i += 1) {
    const operandLeft = randomNum();
    const operandRight = randomNum();
    const operation = randomMath();
    const math = operandLeft + operation + operandRight;

    console.log(`Question: ${operandLeft} ${operation} ${operandRight}`);
    // eslint-disable-next-line no-eval
    const result = eval(math);
    const answer = Number(readlineSync.question('You answer: '));

    if (result === answer) {
      console.log('Correct!');
      counter += 1;
    } else if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default calc;
