function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

function multiply(a, b, c, d){
  // this function is passed 4 paramers
  // multiply them and return the result
  return a * b * c * d;
}

function average(a, b, c, d, e){
  // this function is passed 5 heights in meters
  // calculate their average and return it
  return (a + b + c + d + e)/5;
}

function remainder(a, b){
  // this function is passed 2 arguments
  // return the remainder of first
  // argument when divided by the second
  return a % b;
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
  if (a===b) {
    return false;
  } else if (a==b) {
    return true;
  } else {
    return false;
  }
}

function strictEqual(a, b, c){
  // function is passed 3 arguments
  // return true if they are all strictly equal and false otherwise
  if (a===b && a===c && b===c) {
    return true;
  } else {
    return false;
  }
}

function smaller(a, b){
  // this function is passed 2 arguments
  // return true if second argument is
  // greater than or equal to first, otherwise return string 'smaller'
  if (b >= a) {
    return true;
  } else {
    return "smaller";
  }
}

function isDivisibleBy(divider1, divider2, number){
  // if number is divisible by divider1 or divider2 return true or false otherwise
  // do not use if/else or ternary
  return number % divider1 === 0 || number % divider2 === 0;
}

function evens(number1, number2, number3, number4){
  // this function is passed 4 numbers
  // return true if all numbers are even or false otherwise
  // do not use if/else or ternary
  return number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0 && number4 % 2 === 0;
}

function removeMiddle( words ){
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
  return words.splice( Math.ceil(words.length / 2) - 1, 1);
}

function get2ndAnd3rd( myArray ){
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
  return myArray.slice(1,3);
}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  return myArray.map(x=>x+1);
}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
  return words.map(x=>x.length);
}

function cities( capitals, formatter ){
  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences
  return capitals.map(x=>formatter(x));
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  return numbers.filter(x=>x>10);
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  return numbers.filter(x => x % 2 === 0);
}

function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
  return words.indexOf("needle");
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  return Math.max(...numbers);
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  let total = 0;
  numbers.forEach(function(x) {
    total = total + x;
  });
  return total;
}

function averages( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  let total = 0;
  let count = 0;
  things.forEach(function(x) {
    if (typeof x === "number") {
      total = total + x;
      count++;
    }
  });
  return total/count;

}

function sortingStrings(strings){
  // things is an array of sortingStrings
  // sort them in alphabetical order and return the sorted array
  return strings.sort();
}

function sortingNumbers(numbers){
  // things is an array of numbers
  // sort them in ascending order and return the sorted array
  return numbers.sort(function(a,b) {
    return a - b;
  })
}

function sortingNumbersDescending(numbers){
  // things is an array of sortingStrings
  // sort them in descending order and return the sorted array
  return numbers.sort(function(a,b) {
    return b - a;
  })
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
  return cars.sort(function(a,b) {
    return a.year - b.year;
  })
}

function deleteColour( car ){
  // car is an object with properties make, model and color. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // delete the property colour and return car without this property
  delete car.colour;
  return car;
}

function paintShop( cars, colour ){
  // cars is an array of objects that have
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   colour: 'red'
  // }

  // set the colour of each Ford car to be the colour
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
  let newcars=JSON.parse(JSON.stringify(cars));
  newcars.forEach(function(x){
    x.colour=colour;
  });
  return newcars;
}

function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
  let nums = [...numbers];
  nums.sort((a,b) => b - a);
  return numbers.indexOf(nums[1]);
}

function addSales( city, sales ){
  // Argument city is a string containing city name
  // Argument sales is a integer containing
  // We have object containing sales
  //
  // If city already exists in object add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.
  //
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

if (globalSales[city]) {
  globalSales[city] += sales;
} else {
  globalSales[city] = sales
}

  return globalSales;
}

function totalSales( sales ){
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.
  let cities = Object.keys(sales);
  let total = 0;
  cities.forEach(function(currentKey) {
    total += sales[currentKey];
  });
  return total;
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
  let cash = Object.keys(wallet);
  let total = 0;
  cash.forEach(function(currentNote){
    total += currentNote*wallet[currentNote]
  });
  return total;
}

function walletMerge( wallet1, wallet2 ){
  // return a new wallet object containing the contents of
  // both wallets passed in.

  let wallet3=JSON.parse(JSON.stringify(wallet1));
  let x = Object.keys(wallet2);
  x.forEach(function(currentKey){
    wallet3[currentKey]+=wallet2[currentKey]
  });
  return wallet3
}

function arrayOfWallets( wallets ){
  // wallets is an array of wallets
  let summedWallet = {
    5: 0,
    10: 0,
    20: 0
  };

  wallets.forEach(function(currentWallet) {
    let notes = Object.keys(currentWallet);

    notes.forEach(function(currentNote) {
      summedWallet[currentNote] += currentWallet[currentNote];
    });
  });

  return summedWallet;
  // Return a new wallet object containing the notes from all wallets
}

function crazyMoney( wallets ){
  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.

  let summedWallet = {};

  wallets.forEach(function(currentWallet) {
    let notes = Object.keys(currentWallet);

    notes.forEach(function(currentNote) {
      if (summedWallet[currentNote]) {
        summedWallet[currentNote] += currentWallet[currentNote];
      } else {
        summedWallet[currentNote] = currentWallet[currentNote];
      }
    });
  });

  let cash = Object.keys(summedWallet);
  let total = 0;
  cash.forEach(function(currentCash){
    total += currentCash*summedWallet[currentCash];
  });
  return total;
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
