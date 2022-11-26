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
  requirement4: () => list.pop()
};
