import readlineSync from 'readline-sync';
import randomNum from "../random-num.js";
import randomMath from "../random-math.js";

const calc = () => {
    let counter = 0;
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');

    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i+=1) {
        let operandLeft = randomNum();
        let operandRight = randomNum();
        let operation = randomMath();
        let math = operandLeft + operation + operandRight;

        console.log(`Question: ${operandLeft} ${operation} ${operandRight}`);
        const result = eval(math);
        const answer = Number(readlineSync.question('You answer: '));


        if (result === answer) {
            console.log('Correct!');
            counter += 1
        } else if (result !== answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${userName}`);
            break;
        } if (counter === 3) {
            console.log(`Congratulations, ${userName}!`);
        }
    }

};

export default calc;

