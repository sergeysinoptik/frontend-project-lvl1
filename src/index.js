import readlineSync from 'readline-sync';

const engine = (gameName) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameName.rules);

  const gameProcess = () => {
    for (let i = 1; i < 4; i += 1) {
      const gameQuestion = gameName.gameQuestion();
      console.log(`Question: ${gameQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (String(userAnswer) === gameName.correctAnswer(gameQuestion)) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameName.correctAnswer(gameQuestion)}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };

  gameProcess(gameName);
};

export default engine;
