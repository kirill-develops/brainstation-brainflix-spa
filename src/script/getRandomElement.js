export const getRandomElement = (array) => {
const random = Math.floor(Math.random() * array.length);
  return array[random];
}

