export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 999);

export const gameQuestion = () => getRandomNumber();

export const correctAnswer = (num) => {
  if (num === 1) {
    return 'yes';
  }
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      return 'no';
    }
    divisor += 1;
  }
  return 'yes';
};
