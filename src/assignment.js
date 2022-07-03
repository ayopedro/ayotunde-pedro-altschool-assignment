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

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
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

