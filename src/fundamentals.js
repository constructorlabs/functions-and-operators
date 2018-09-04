function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

// Rewrite function as multiline arrow function with return statement
const addArrow = (a, b) => {
  return a + b;
  // add the two arguments and return the sum
}

// Rewrite function as single line arrow function without a return statement
const addSingleLineArrow = (a, b) => a+b;
  // add the two arguments and return the sum

// Rewrite function as arrow function
const remainder = (number, divisor) => number%divisor;
  // return the remainder of number
  // when divided by divisor


// Rewrite function as arrow function
const exponential = (number, exponent) => number ** exponent;
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator


// Rewrite function as arrow function
const smaller = (a, b) => (a != b) ? Math.min(a,b) : false;
  // function receives two numbers as arguments
  // return smaller number
  // if numbers are the same return `false`


// Rewrite function as arrow function
const circumference = (diameter) => (diameter * Math.PI).toFixed(3);
  // function receives the diameter
  // calculate the circumference of the circle
  // return number as a string with 3 decimal places
  


// Rewrite function as arrow function
const countOnes = (onesAndZeros) => onesAndZeros.replace(/0/g,"").length;

// Rewrite function as arrow function
const dateFormat = (date) => {
let dateArr = date.split("-");
dateArr[0] = Number(dateArr[0]);
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
dateArr[1] = monthArr[Number(dateArr[1])-1];
return dateArr.join(" ");
}
  // function receives a date as a string
  // in the format yyyy-mm-dd

  // return date in format d mmmm yyyy
  // for example '03-11-2018' becomes '3 November 2018'

  // hint: you may want to use the string method `split`.


// Rewrite function as arrow function
const mulitplyAll = (numbers) => numbers.reduce((a,b) => (a*b));
  // numbers is an array of numbers
  // multiply all numbers in array
  // and return the product


// Rewrite function as arrow function
const largestArea = (rectangles) => rectangles.map(x => x[0] * x[1]).sort((a,b)=>b-a)[0];
  // rectangles is an array of arrays,
  // where the inner contains two numbers
  // the first number is the height of a rectangle and
  // the second number is the width of a rectangle

  // for example [[4,2], [7, 1], [5, 5]] return 25

  // return the area of the largest rectangle

module.exports = {
  add,
  addArrow,
  addSingleLineArrow,
  remainder,
  exponential,
  smaller,
  circumference,
  countOnes,
  dateFormat,
  mulitplyAll,
  largestArea
};
