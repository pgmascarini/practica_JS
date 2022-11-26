import readline from "readline";
import { requirements } from "./requirements.js";
import { utils } from "./utils.js";
import { students } from "./students.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getAnswerFromConsole() {
  const promise = new Promise((resolve) => {
    rl.question("Introduce el número del requisito: ", (answer) => {
      rl.pause();
      resolve(answer);
    });
  });

  return promise;
}

async function terminal() {
  let answerFromConsole;

  do {
    console.table(requirements.list);
    answerFromConsole = await getAnswerFromConsole();
    switch (Number.parseInt(answerFromConsole)) {
      case 1:
        students.requirement1();
        break;
      case 2:
        students.requirement2();
        break;
      case 3:
        students.requirement3();
        break;
      case 4:
        students.requirement4();
        break;
      case 5:
        students.requirement5();
        break;
      case 6:
        students.requirement6();
        break;
      case 7:
        students.requirement7();
        break;
      case 8:
        students.requirement8();
        break;
      case 9:
        students.requirement9();
        break;
      case 10:
        students.requirement10();
        break;
      case 11:
        students.requirement11();
        break;
      case 12:
        students.requirement12();
        break;
    }
  } while (utils.isInt(answerFromConsole) && Number.parseInt(answerFromConsole) > 0 && Number.parseInt(answerFromConsole) <= requirements.length);
}

terminal();