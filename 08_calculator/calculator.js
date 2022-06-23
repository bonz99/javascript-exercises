const sum = function(numbers) {
  let sumOfArray = 0;
	for (let i = 0; i < numbers.length; i++) {
    sumOfArray += numbers[i]; 
  }
  return sumOfArray;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const add = function(num1, num2) {
	return num1 + num2;
};

const multiply = function(numbers) {
  let product = 1;
  for (let number of numbers) {
    product *= number;
  }
  return product;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
  let facOfNumber = 1;
  for (let i = number; i > 0; i--) {
    facOfNumber *= i;
  }
  return facOfNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
