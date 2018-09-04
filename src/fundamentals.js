function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

// Rewrite function as multiline arrow function with return statement
function addArrow(a, b){
  // add the two arguments and return the sum
}

// Rewrite function as single line arrow function without a return statement
function addSingleLineArrow(a, b){
  // add the two arguments and return the sum
}

// Rewrite function as arrow function
function remainder(number, divisor){
  // return the remainder of number
  // when divided by divisor
}

// Rewrite function as arrow function
function exponential(number, exponent){
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator
}

// Rewrite function as arrow function
function smaller(a, b){
  // function receives two numbers as arguments
  // return smaller number
  // if numbers are the same return `false`
}

// Rewrite function as arrow function
function circumference(diameter){
  // function receives the diameter
  // calculate the circumference of the circle
  // return number as a string with 3 decimal places
}

// Rewrite function as arrow function
function countOnes(onesAndZeros){
  // onesAndZeros is a string which contains only `1` and `0`

  // return the number of `1`s in the string
}

// Rewrite function as arrow function
function dateFormat(date){
  // function receives a date as a string
  // in the format dd-mm-yyyy

  // return date in format d mmmm yyyy
  // for example '03-11-2018' becomes '3 November 2018'

  // hint: you may want to use the string method `split`.
}

// Rewrite function as arrow function
function mulitplyAll(numbers){
  // numbers is an array of numbers
  // multiply all numbers in array
  // and return the product
}

// Rewrite function as arrow function
function largestArea(rectangles){
  // rectangles is an array of arrays,
  // where the inner array contains two numbers
  // the first number is the height of a rectangle and
  // the second number is the width of a rectangle

  // for example [[4,2], [7, 1], [5, 5]] return 25

  // return the area of the largest rectangle
}

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
