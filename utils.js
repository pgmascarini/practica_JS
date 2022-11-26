export const utils = {
    isInt: (str) => (/^[0-9]+$/.test(str)),
    calculateRandomNumber: (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)
};
