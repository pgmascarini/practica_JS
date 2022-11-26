import { utils } from "./utils.js"

const list = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}];

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

export const students = {
  requirement1: () => console.table(list),
  requirement2: () => console.log(`Hay ${list.length} alumnos en clase.`),
  requirement3: () => list.forEach((item) => console.log(item.name)),
  requirement4: () => list.pop(),
  requirement5: () => list.splice(utils.calculateRandomNumber(0, list.length), 1),
  requirement6: () => console.table(list.filter((item) => item.gender === 'female')),
  requirement7: () => {
    const girls = list.filter((item) => item.gender === 'female');
    console.log(`Hay ${girls.length} chica(s). Hay ${list.length - girls.length} chico(s).`)
  },
  requirement8: () => {
    const boy = list.find((item) => item.gender === 'male');
    if (boy)
      console.log(false);
    else
      console.log(true);
  },
  requirement9: () => list.forEach((item) => {
      if (item.age >= 20 && item.age <= 25)
        console.log(item.name);
    }),

};
