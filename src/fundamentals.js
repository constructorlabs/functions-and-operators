function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

// Rewrite function as multiline arrow function with return statement
const addArrow = (a,b) => {
  return a+b;
  // add the two arguments and return the sum
}

// Rewrite function as single line arrow function without a return statement
const addSingleLineArrow = (a, b) => a+b;
  // add the two arguments and return the sum


// Rewrite function as arrow function
const remainder = (number, divisor) => number % divisor;

  // return the remainder of number
  // when divided by divisor


// Rewrite function as arrow function
const exponential = (number, exponent) => number**exponent;
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator


// Rewrite function as arrow function
const smaller = (a, b) => (a !== b) ? Math.min(a,b) : false;

  // function receives two numbers as arguments
  // return smaller number
  // if numbers are the same return `false`


// Rewrite function as arrow function
const circumference=(diameter) => (Math.PI*diameter).toFixed(3);
  // function receives the diameter
  // calculate the circumference of the circle
  // return number as a string with 3 decimal places


// Rewrite function as arrow function
const countOnes = (onesAndZeros) => {arr = onesAndZeros.split("");
  let count=0;
  for (let i=0;i<arr.length;i++) {
    if (arr[i] === "1") {
      count++
    }
  }
  return count;
}
  // onesAndZeros is a string which contains only `1` and `0`

  // return the number of `1`s in the string


// Rewrite function as arrow function
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
const dateFormat=(date) => {
  let dateArr=date.split("-");
  let year=Number(dateArr[2]);
  let month=months[Number(dateArr[1])-1];
  let day=Number(dateArr[0]);
  return day+" "+month+" "+year;
}
  // function receives a date as a string
  // in the format dd-mm-yyyy

  // return date in format d mmmm yyyy
  // for example '03-11-2018' becomes '3 November 2018'

  // hint: you may want to use the string method `split`.


// Rewrite function as arrow function
const reducer = (multiplier, currentValue) => multiplier * currentValue;
const mulitplyAll = (numbers) => numbers.reduce(reducer);
  // numbers is an array of numbers
  // multiply all numbers in array
  // and return the product


// Rewrite function as arrow function
const largestArea= rectangles => {
    let areas=[]
    for (i=0; i<rectangles.length;i++) {
        areas[i]= rectangles[i][0]*rectangles[i][1];
    }
    return Math.max(...areas);
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
