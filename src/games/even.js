import readlineSync from 'readline-sync';

const isEven = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 999);
  const correctAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  for (let i = 1; i < 4; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer(number)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(number)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default isEven;
