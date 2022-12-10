import readlineSync from "readline-sync";
import randomNum from "../random-num.js";
import primeNum from "../prime-num-func.js";


const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;

  for (let i = 0; i < 3; i +=1) {
    const number = randomNum();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toString();

    if (primeNum(number) === true && answer === 'yes') {
      console.log('Correct!');
      counter += 1
    } else if (primeNum(number) === false && answer === 'no') {
      console.log('Correct!');
      counter += 1
    }else if (primeNum(number) === false && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default prime;