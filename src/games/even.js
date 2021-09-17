export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 999);

export const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const gameQuestion = () => getRandomNumber();
