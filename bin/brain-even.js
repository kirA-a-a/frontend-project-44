#!/usr/bin/env node

import readlineSync from "readline-sync";

export const brainEven = () => {

    const name = readlineSync.question('May I have your name? ');
    console.log('Welcome to the Brain Games!');
    console.log('Hello, ' + name + '!');

    console.log('Answer "yes" if the number is even, otherwise answer "no". ');

    for (let i = 0; i<3; i++) {

    let min = 1;
    let max = 10;

    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('You answer: ');


        if (answer === "yes" && randomNum % 2 === 0 ||
            answer === "no" && randomNum % 2 === 1) {
            console.log("Correct!");
        } else {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
            console.log(`Let's try again, ${name}`)
        }
    }

    console.log(`Congratulations, ${name}`)
}

brainEven()