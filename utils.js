export const generateBoolean = () => !!Math.round(Math.random() * 1);

export const getRandomInt = (min, max) =>
  Math.round((rand = min + Math.random() * (max - min)));
