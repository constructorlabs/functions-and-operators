function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

function multiply(a, b, c, d){
  // this function is passed 4 parameters
  // multiply them and return the result
  return a * b * c * d;
}

function average(){
  // this function is passed 5 heights in meters
  // calculate their average and return it
  let myArrFromArguments = Array.from(arguments);
  let newArr = myArrFromArguments.reduce (function (acc,item){
    return acc + item
  });
  return newArr/myArrFromArguments.length;
}

function remainder(n1, n2){
  // this function is passed 2 arguments
  // return the remainder of first
  // argument when divided by the second
  return n1 % n2;
}

function exponential(a, b){
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator
  return a ** b;

}

function laxEquality(a, b){
  // this function is passed 2 arguments
  // return true if they are equal but not strictly equal
  return a == b && a !== b;
}


function strictEqual(a,b,c){

  return a === b && a === c && b === c;
  // function is passed 3 arguments
  // return true if they are all strictly equal and false otherwise
}

function smaller(a,b){
  return b >= a ? true : 'smaller';
  // this function is passed 2 arguments
  // return true if second argument is
  // greater than or equal to first, otherwise return string 'smaller'
}

function isDivisibleBy(divider1, divider2, number){
    let firstTest = number % divider1 === 0;
    let secondTest = number % divider2 === 0;
    return firstTest || secondTest;
  // if number is divisible by divider1 or divider2 return true or false otherwise
  // do not use if/else or ternary
}

function evens(a, b, c, d){
  // Flexible approach
  let arrNumbers = Array.from(arguments);
  let result = arrNumbers
    .map(num => num % 2 === 0)
    .reduce( (acc, item) => {
      return acc && item;
    });

  return result;

  // NON flexible approach
  // return a % 2 === 0 && b % 2 === 0 && c % 2 === 0 && d % 2 === 0;

  // this function is passed 4 numbers
  // return true if all numbers are even or false otherwise
  // do not use if/else or ternary
}


function removeMiddle( words ){
  return words.splice(Math.floor(words.length/2), 1);

  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
}


function get2ndAnd3rd( myArray ){
    return myArray.slice(1, 3);
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
}

function mapper( myArray ){
  let result = myArray.map(function(num){
    return num + 1;
  });

  return result;
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
}

function wordLengths( words ){
  let result = [];
  words.forEach(function(item){
    result.push(item.length);
  });

  return result;
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // for example
  // input:
  // [ 'jupiter', 'mars', 'saturn' ]
  // output:
  // [ 7, 4, 6]
}


function cities( capitals, formatter ){

  return capitals.map(formatter);

  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a callback function provided for you which
  // transforms a capital object into a sentence returns it such as
  // 'Paris is the capital of France'.
  // Apply formatter to each object in capitals array and
  // return an array of resulting sentences
}



function largerThanTen( numbers ){
  let newArr = numbers.filter (function (num) {
    return num > 10;
  });
  // numbers is an array of numbers
  // return a new array that contains only numbers
  // from the input array which are greater than 10
  return newArr;
}


function even( numbers ){
  let newArr = numbers.filter (function (num) {
    return num % 2 === 0;
  });
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  return newArr;
}

function findTheNeedle( words ){
  return words.indexOf('needle');
  // words is an array of words
  // return the index of the word 'needle'
}

function findLargest( numbers ){
  return numbers.reduce(function (acc, item){
    return acc > item ? acc : item;
  });
  // numbers is an array of numbers
  // return the largest number from that array
}

function addAllnumbers( numbers ) {
  return numbers.reduce(function (acc,item) {
    return acc + item;
  });
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}

function averages( things ) {
  let newArr = things.filter(function(thing){
      return typeof(thing) === 'number';
    });
  let addingNumbers = newArr.reduce(function(acc,item){
    return acc + item;
  });
    return addingNumbers/newArr.length;

  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
}

function sortingStrings(strings){
  return strings.sort();
  // strings is an array of strings
  // sort them in alphabetical order and return the sorted array
}

function sortingNumbers(numbers){
  return numbers.sort(function(a, b) {
    return a - b;
  });
  // things is an array of sortingStrings
  // sort them in ascending order and return the sorted array
}

function sortingNumbersDescending(numbers){
  // things is an array of sortingStrings
  // sort them in descending order and return the sorted array
}

function sortingCars(cars){
  // a car object has a make, model, year. For example
  // const car = {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   year: 1994
  // }
  //
  // cars is an array of car objects. Sort them ascending by year and return
  // the sorted array.
}

function deleteColour( car ){
  // car is an object with properties make, model and color. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // delete the property colour and return car without this property
};

function paintShop( cars, colour ){
  // cars is an array of objects that have
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each Ford car to be the colour
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
}

function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
}

function addSales( city, sales ){
  // Argument city is a string containing city name
  // Argument sales is a integer containing the sales
  // for that location

  // We have object containing sales
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  // If city already exists in object, add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.

  // return the updated globalSales object
}

function totalSales( sales ){
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.

  // Hint: look up how to get the values of an object
}

function walletSum( wallet ){
  // A wallet object has keys which are the denominations
  // and values which are the number of those notes in the
  // wallet. See example below.
  //
  // const exampleWallet = {
  //   5: 3,
  //   10: 7,
  //   20: 2
  // };
  //
  // calculate the sum of money in the wallet and return
  // the total.

  // the denominations used in this exercise are 5, 10 and 20
}

function walletMerge( wallet1, wallet2 ){
  // return a new wallet object containing the contents of
  // both wallets passed in.

  // the denominations used in this exercise are 5, 10 and 20
}

function arrayOfWallets( wallets ){
  // wallets is an array of wallets

  // Return a new wallet object containing the notes from all wallets
  // the denominations used in this exercise are 5, 10 and 20
}

function crazyMoney( wallets ){
  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.

  // Hint: look up how to get keys of objects. You may also need
  // to use square bracket notation to look up values which
  // correspond to those keys
}

module.exports = {
  add,
  multiply,
  average,
  remainder,
  exponential,
  laxEquality,
  strictEqual,
  smaller,
  isDivisibleBy,
  evens,
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  averages,
  sortingStrings,
  sortingNumbers,
  sortingNumbersDescending,
  sortingCars,
  deleteColour,
  paintShop,
  secondLargest,
  addSales,
  totalSales,
  walletSum,
  walletMerge,
  arrayOfWallets,
  crazyMoney
};
