import {
   variables
} from "./GlobalVariables";
import createRondomNumber from "./RandomNumber";
let randomNumber = 0;

//:REFACTOR
let data = [[], [], [], [], [], [], [], [], [], []];

let {
   rows,
   columns,
   matrixSumNumber } = variables;

export default function startGame() {
   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
         //rastgele sayı oluşturyor
         randomNumber = createRondomNumber();

         if (matrixSumNumber <= randomNumber) {
            data[i][j] = matrixSumNumber;
            matrixSumNumber = 0;
         } else {
            data[i][j] = randomNumber;
            matrixSumNumber -= randomNumber;
            if (i == rows - 1 && j == columns - 1) {
               data[Math.ceil(i / 2)][Math.ceil(j / 2)] +=
                  matrixSumNumber;
            }
         }
      }
   }
   return data;
}

