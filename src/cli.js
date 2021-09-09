import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const welcome = (str) => console.log(`Hello, ${str}!`);

export { name, welcome };
