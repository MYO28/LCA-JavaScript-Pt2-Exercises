function multiply(num1, num2, num3) {
  //1. Check if any if the numbers are equal to each other
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "Error: All numbers must be different!";
  }

  //2. If they are all different, multiply them together and return the result
  return num1 * num2 * num3;
}

//console.log(multiply(2, 3, 4));
//console.log(multiply(2, 2, 1));

const convertToSeconds = function (minutes) {
  return minutes * 60;
};

//console.log(convertToSeconds(5));
//console.log(convertToSeconds(10));

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

//Test 1: Freezing point of water (32°F should be 0°C)
//console.log(fahrenheitToCelsius(32));

//Test 2: Boiling point of water (212°F should be 100°C)
//console.log(fahrenheitToCelsius(212));

//Test 3: Room temperature (70°F should be approximately 21.11°C)
//console.log(fahrenheitToCelsius(70));

function reverseString(str) {
  return str.split("").reverse().join("");
}

//console.log(reverseString("hello")); //Output: "olleh"
//console.log(reverseString("JavaScript")); //Output: "tpircSavaJ"
//console.log(reverseString("racecar")); //Output: "racecar"

function countVowels(str) {
  let vowelCount = 0;
  //Convert the whole string to lowercase so we don't miss CAPITAL VOWELS
  let lowercaseStr = str.toLowerCase();

  //Look at each letter in the string individually
  for (let letter of lowercaseStr) {
    //Check if the current letter is a vowel
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCount++; //Add 1 to our counter
    }
  }
  return vowelCount;
}

//console.log(countVowels("javascript")); //Output: 3 (a, a , i)
//console.log(countVowels("HELLO WORLD")); //Output: 3 (E, O, O)

function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;

  // Check for divisors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a factor, so it's not prime
    }
  }

  // If no factors were found, it's prime
  return true;
}

// --- Testing with 4 numbers ---
//console.log("Is 2 prime?", isPrime(2)); // Expected: true (smallest prime)
//console.log("Is 7 prime?", isPrime(7)); // Expected: true
//console.log("Is 4 prime?", isPrime(4)); // Expected: false (divisible by 2)
//dconsole.log("Is 15 prime?", isPrime(15)); // Expected: false (divisible by 3 and 5)
