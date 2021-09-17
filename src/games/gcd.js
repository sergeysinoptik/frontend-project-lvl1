export const rules = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.floor(Math.random() * 999);

const gcd = (firstNum, secondNum) => {
  if (firstNum % secondNum === 0) {
    return secondNum;
  }
  let divisor = secondNum;
  let i = firstNum % secondNum;
  let result = 1;
  while (divisor % i > 0) {
    result = divisor % i;
    divisor = i;
    i = result;
  }
  return result;
};

const getTwoRandomNumbers = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

export const gameQuestion = () => getTwoRandomNumbers();

export const correctAnswer = (str) => {
  const answerArray = str.split(' ');
  answerArray.sort((a, b) => b - a);
  return String(gcd(answerArray[0], answerArray[1]));
};
