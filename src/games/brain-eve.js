import readlineSync from 'readline-sync';

const brainEven = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Welcome to the Brain Games!');
    console.log('Hello, ' + name + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');

    let counter = 0;

    for (let i = 0; i<3; i+=1) {
        let min = 1;
        let max = 10;
        let answerYes = "yes";
        let answerNo = "no";

        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        console.log(`Question: ${randomNum}`);
        const answer = readlineSync.question('You answer: ');

        if (answer === 'yes' && randomNum % 2 === 0) {
            console.log("Correct!");
            counter += 1;
        } else if (answer === 'no' && randomNum % 2 === 1) {
            console.log("Correct!");
            counter += 1;
        } else if (answer === 'yes' && randomNum % 2 === 1) {
            console.log(`"${answerYes}" is wrong answer ;(. Correct answer was "${answerNo}".`);
            console.log(`Let's try again, ${name}`);
            break;
        } else if (answer === 'no' && randomNum % 2 === 0) {
            console.log(`"${answerNo}" is wrong answer ;(. Correct answer was "${answerYes}".`);
            console.log(`Let's try again, ${name}`);
            break;
        } else {
            console.log(`${answer} is wrong answer ;(.`);
            console.log(`Let's try again, ${name}`);
            break;
        }
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

export default brainEven;