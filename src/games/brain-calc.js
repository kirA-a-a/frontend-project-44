import readlineSync from 'readline-sync';
import greeting from "../cli.js";
import randomNum from "../random-num.js";
import randomMath from "../random-math.js";

const calc = () => {
    let operandLeft = randomNum();
    let operandRight = randomNum();
    let operation = randomMath();

    console.log('What is the result of the expression?');
    console.log(`Question: ${operandLeft} ${operation} ${operandRight}`);

    switch (operation) {
        case '+' :
            const resultPlus = operandLeft + operandRight;
            break;
        case '-' :
            const resultMinus = operandLeft + operandRight;
            break;
        case '*':
            const resultMultiply = operandLeft + operandRight;
            break;
    }

    let answer = readlineSync.question('You answer: ');

};

calc();
export default calc;

