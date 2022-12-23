//Global Variables
let count = 0;
let rows = 5;
let columns = 5;
let equality = 20;
let equalityHalf = 0;
let matrixSumNumber = rows * columns * equality;

equalityHalf = equalityHalf + Math.floor(equality / 2);

export let variables = {
   count,
   rows,
   columns,
   equality,
   equalityHalf,
   matrixSumNumber,
}
