// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

// Challenge - 1
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
    return sum;
    // return arrayOfNumbers.length;
}
assignment.sumOfNumbers = sumOfNumbers;

// Challenge - 2
function countEvenNumbers(arrayOfNumbers) {
  let evenNumbers = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      evenNumbers++;
    }
  }
    return evenNumbers;
    // return arrayOfNumbers.length;
}
assignment.countEvenNumbers = countEvenNumbers;

// Challenge - 3

function celsiusToFahrenheit(arrayOfNumbers) {
  let fahrenheitArray = [];
  
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let num = Math.floor(arrayOfNumbers[i] * (9/5) + 32);
    fahrenheitArray.push(num);
  }
    return fahrenheitArray;
    // return arrayOfNumbers;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

