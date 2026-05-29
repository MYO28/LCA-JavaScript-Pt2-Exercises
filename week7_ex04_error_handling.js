function validateInput(input) {
  if (input === null || input === undefined) {
    return "Error: Input cannot be empty";
  }
  if (typeof input !== "string") {
    return "Error: Input must be a string";
  }
  if (input.trim() === "") {
    return "Error: Input cannot be blank spaces";
  }
  return "Valid input: " + input;
}
function demonstrateErrors(value) {
  try {
    if (value === undefined) {
      throw new ReferenceError("Value is not defined");
    }
    if (typeof value !== "number") {
      throw new TypeError("Expected a number, got " + typeof value);
    }
    if (value < 0) {
      throw new RangeError("Number must be 0 or above, got " + value);
    }
    return "Value is valid: " + value;
  } catch (error) {
    return error.name + ": " + error.message;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countWords(str) {
  return str.trim().split(" ").length;
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s/g, "");
  return cleaned === reverseString(cleaned);
}
function getMax(arr) {
  return Math.max(...arr);
}

function getMin(arr) {
  return Math.min(...arr);
}

function getAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
