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
  requirement5: () => list.splice(utils.calculateRandomNumber(0, list.length - 1), 1),
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
  requirement10: () => {
    const people = [...availableMaleNames, ...availableFemaleNames];
    const index = utils.calculateRandomNumber(0, people.length - 1)
    list.push({
      age: utils.calculateRandomNumber(20, 50),
      examScores: [],
      gender: index < availableMaleNames.length ? 'male' : 'female',
      name: people[index]
    })
  },
  requirement11: () => {
    const yongest = list.reduce((previous, current) => previous.age < current.age ? previous : current);
    console.log(yongest.name);
  },
  requirement12: () => {
    const sum = list.reduce((accumulator, item) => (accumulator + item.age), 0);
    console.log(`La edad media de la clase es ${sum / list.length}`);
  },
  requirement13: () => {
    const girls = list.filter((item) => item.gender === 'female');
    const sum = girls.reduce((accumulator, item) => (accumulator + item.age), 0);
    console.log(`La edad media de las chicas es ${sum / girls.length}`);
  },
  requirement14: () => {
    list.forEach((item) => item.examScores.push(utils.calculateRandomNumber(0, 10)));
  }



};