import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');

  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const min = 1;
    const max = 10;
    const answerYes = 'yes';
    const answerNo = 'no';
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('You answer: ').toString();

    if (answer === 'yes' && randomNum % 2 === 0) {
      console.log('Correct!');
      counter += 1;
    } else if (answer === 'no' && randomNum % 2 === 1) {
      console.log('Correct!');
      counter += 1;
    } else if (answer === 'yes' && randomNum % 2 === 1) {
      console.log(`'${answerYes}' is wrong answer ;(. Correct answer was '${answerNo}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (answer === 'no' && randomNum % 2 === 0) {
      console.log(`'${answerNo}' is wrong answer ;(. Correct answer was '${answerYes}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (answer !== 'yes' && randomNum % 2 === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerYes}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (answer !== 'no' && randomNum % 2 === 1) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerNo}'`);
      console.log(`Let's try again, ${name}!`);
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainEven;
