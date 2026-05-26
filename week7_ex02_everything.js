function sum(maxNumber) {
  //1.Check if it's a number,and check if it's an integer using % 1
  if (typeof maxNumber !== "number" || maxNumber % 1 !== 0) {
    return "The value passed is not a number";
  }

  let totalSum = 0;

  //2.Loop from 0 up to the maxNumber, adding each number to totalSum
  for (let i = 0; i <= maxNumber; i++) {
    totalSum += i; //This is a shortcut for: totalSum = totalSum + i;
  }

  return totalSum;
}

//Test 1: Valid integer (0 + 1 + 2 + 3 + 4 + 5 = 15)
//console.log(sum(5)); // Expected output: 15

//Test 2: Valid integer (0 + 1 + 2 + 3 = 6)
//console.log(sum(4)); // Expected output: 6

//Test 3: Decimal number (should return error message)
//console.log(sum(5.5)); // Expected output: "The value passed is not a number"

//Test 4: Passing a string text (should return error message)
//console.log(sum("hello")); // Expected output: "The value passed is not a number"

//Test 5: Passing a string that looks like a number
//console.log(sum("5")); // Expected output: "The value passed is not a number"

function funkyMath() {
  // Check if 2 arguments were passed
  if (arguments.length === 2) {
    //Subtract the first from the second (Arg 2 - Arg 1)
    return arguments[1] - arguments[0];
  }
  //Check if 3 arguments were passed
  if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }

  //Check if 4 arguments were passed
  if (arguments.length === 4) {
    //Changed the minus sign to a plus sign here:
    return (arguments[0] + arguments[1]) / (arguments[2] + arguments[3]);
  }

  //Return a message if they pass an unsupported number of arguments
  return "Please pass 2,3, or 4 arguments!";
}

//Test 1: 2 arguments (Subtract 1st from 2nd: 10 - 4)
//console.log(funkyMath(4, 10)); //Should print: 6

//Test 2: 3 arguments (Add all: 5 + 5 +5)
//console.log(funkyMath(5, 5, 5)); //Should print: 15

//Test 3: 4 arguments (Your example: (8+2) / (3+5): 10 / 8)
//console.log(funkyMath(8, 2, 3, 5)); //Should print: 1.25

function funkyMath() {
  //Chewck if 2 arguments were passed
  if (arguments.length === 2) {
    return arguments[1] - arguments[0];
  }

  //Check if 3 arguments were passed
  if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }

  //Check if 4 arguments were passed
  if (arguments.length === 4) {
    //Changed the minus sign to a plus sign here:
    return (arguments[0] + arguments[1]) / (arguments[2] + arguments[3]);
  }

  //Return a message if they pass an unsupported number of arguments
  return "Please pass 2,3, or 4 arguments!";
}

//1.Define our starting array and an empty array for the odd numbers
const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

//2.Loop through the array to find odd numbers
for (const num of numbers) {
  if (num % 2 !== 0) {
    oddNumbers.push(num); //.push() adds the number to our new array
  }
}

//3.Sort the odd numbers from smallest to biggest
oddNumbers.sort(function (a, b) {
  return a - b;
});

//Test our results
//console.log("Original array:", numbers);
//console.log("Sorted odd numbers:", oddNumbers);

const me = {
  firstName: "Alex",
  lastName: "Smith",
  age: 23,
  favouriteColour: "Red",
  dreamCar: "Lamborghini Aventador SVJ",
  favouriteFood: "Pizza",
};

//Delete the property here:
delete me.age;

//Test to see if it's gone
//console.log(me.age); //Should print: undefined
//console.log(me); //The whole object will no longer include age

//Test it to see the change!
//console.log(me.favouriteFood); //Should print: "Pizza"
//console.log(me); //The whole object will now include favouriteFood

//Test 1:Print the whole object
//console.log(me);

//Test 2:Print just the first name
//console.log(me.firstName); //Should print: "Alex"

//Test 3: Use it in a sentence!
//console.log("My dream car is a " + me.dreamCar); //Should print: My dream car is a Lamborghini Aventador SVJ
