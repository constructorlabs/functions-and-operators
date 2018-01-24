function add(a, b){
  // add the two arguments and return the sum
  return a + b;
}

const multiply = (a, b, c, d) => a*b*c*d;

const average = (a, b, c, d, e) => ((a+b+c+d+e)/5);

const remainder = (a,b) => a % b;

const exponential = (a, b) => a**b;

const laxEquality = (a, b) => a == b && a!== b;

const strictEqual = (a, b, c) => a === b && b === c;

const smaller = (a,b) => b >= a ? true:'smaller'

const isDivisibleBy = (divider1, divider2, number) => number % divider1 === 0 || number % divider2 === 0;

const evens = (a, b, c, d) => (a % 2 === 0) && (b % 2 === 0) && (c % 2 === 0) && (d % 2 === 0);

const removeMiddle = words => {
  const m = Math.floor(words.length / 2);
  return words.splice(m,1);
}

const get2ndAnd3rd = myArray => [myArray[1],myArray[2]];

const mapper = ( myArray ) => myArray.map(currentValue=> currentValue+=1 );

const wordLengths = words => words.map(word => word.length );

const cities = ( capitals, formatter ) => capitals.map(formatter);

const largerThanTen = numbers => numbers.filter(number => number>10);

const even = numbers => numbers.filter(number => number %2 === 0);

const findTheNeedle = words => words.indexOf("needle");

const findLargest = numbers => Math.max(...numbers);

const addAllnumbers=  numbers => numbers.reduce((acc,e)=> acc+=e ,0);
  // numbers is an array of numbers
  // return the sum of all the numbers in the array

const averages = things => +(things.filter(e=> typeof e === 'number').reduce((acc,e,i,arr)=> acc+=e/arr.length,0).toFixed(0));
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings


const sortingStrings= strings => strings.sort();
  // things is an array of sortingStrings
  // sort them in alphabetical order and return the sorted array


const sortingNumbers = numbers => numbers.sort((a,b)=> a-b);
  // things is an array of sortingStrings
  // sort them in ascending order and return the sorted array


const sortingNumbersDescending= numbers => numbers.sort((a,b)=> b-a);
  // things is an array of sortingStrings
  // sort them in descending order and return the sorted array


const sortingCars= cars => cars.sort((car1,car2)=> car1.year - car2.year);
  // a car object has a make, model, year. For example
  // const car = {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   year: 1994
  // }
  //
  // cars is an array of car objects. Sort them ascending by year and return
  // the sorted array.


const deleteColour= car => { 
  delete car.color;
  return car;
}
  // car is an object with properties make, model and color. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // delete the property colour and return car without this property


const paintShop= ( cars, colour )=> {
  return cars.map(car=>{
    let newcar = JSON.parse(JSON.stringify(car))
    if (newcar.make==="Ford") newcar.colour= colour;
    return newcar;
  });
}
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


const secondLargest= numbers => {
  const newNumbers = numbers.slice(0);
  const secLar = newNumbers.sort((a,b)=>b-a)[1]
  return numbers.indexOf(secLar);
  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
}

 

const addSales= ( city, sales )=> { 
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };
  globalSales.hasOwnProperty(city)? globalSales[city]+=sales : globalSales[city]=sales;
  return globalSales
}
  // Argument city is a string containing city name
  // Argument sales is a integer containing
  // We have object containing sales
  //
  // If city already exists in object add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.
  //
 

const totalSales= sales=> {
  let total= 0;
  for(let city in sales){
    total += sales[city];
  }
  return total;
}
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.


const walletSum=  wallet => {
  let total= 0;
  for(let note in wallet){
    total += +(note) * wallet[note];
  }
  return total;
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
}

const walletMerge= ( wallet1, wallet2 )=> {
  const newWallet= Object.assign({},wallet1);
  for(let note in wallet2){
    newWallet.hasOwnProperty(note)? newWallet[note] += wallet2[note]: newWallet[note]= wallet2[note];
  }
  return newWallet;
}
  // return a new wallet object containing the contents of
  // both wallets passed in.

const arrayOfWallets= wallets=> wallets.reduce((acc,wallet)=>{
  for(let note in wallet){
    acc.hasOwnProperty(note)? acc[note] += wallet[note]: acc[note] = wallet[note];
  }
  return acc;
},{})
  // wallets is an array of wallets

  // Return a new wallet object containing the notes from all wallets


const crazyMoney= wallets => wallets.reduce((acc,wallet)=>{
    for(let note in wallet){
      acc+= +(note) * wallet[note];
    }
    return acc;
  },0)
  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.


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
