export const rules = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 999);

const operations = ['+', '-', '*'];

const getRandomExpression = () => {
  const firstNumber = getRandomNumber();
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const secondNumber = getRandomNumber();
  return `${firstNumber} ${operation} ${secondNumber}`;
};

export const gameQuestion = () => getRandomExpression();

export const correctAnswer = (str) => {
  const answerArray = str.split(' ');
  switch (answerArray[1]) {
    case '+':
      return String(Number(answerArray[0]) + Number(answerArray[2]));
    case '-':
      return String(Number(answerArray[0]) - Number(answerArray[2]));
    default:
      return String(Number(answerArray[0]) * Number(answerArray[2]));
  }
};
