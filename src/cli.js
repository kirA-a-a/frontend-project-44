import readlineSync from 'readline-sync';

const userName = (name) => {
    name = readlineSync.question('May I have your name? ');

    return  console.log('Hello, ' + name + '!');
}

export {userName};