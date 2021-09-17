export const rules = 'What number is missing in the progression?';

const getRandomNumber = () => Math.floor(Math.random() * 999);

let answer = '';

const getProgression = () => {
  const progressionArray = [];
  const firstItem = getRandomNumber();
  const d = getRandomNumber();
  progressionArray.push(firstItem);
  for (let i = 0; i < 10; i += 1) {
    progressionArray.push(progressionArray[i] + d);
  }
  const randomItem = Math.floor(Math.random() * 10);
  answer = progressionArray[randomItem];
  progressionArray[randomItem] = '..';
  return progressionArray.join(' ');
};

export const gameQuestion = () => getProgression();

export const correctAnswer = () => String(answer);
