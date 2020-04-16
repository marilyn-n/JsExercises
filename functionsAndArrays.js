const words = ['mystery', 'brother', 'aviator', 'crocodile', 'mystery', 'pearl', 'orchard', 'crackpot', 'orchard'];
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Iteration #1: Find the maximum
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

const maxOfTwoNumbers = (n1, n2) => n1 > n2 ? n1 : n2;
console.log(`The max of two numbers is ${maxOfTwoNumbers(132, 332)}`);

// Iteration #2: Find the longest word
// Declare a function named findLongestWord that takes as an argument an array of words 
// and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const longestWord = (words) => words.reduce((a, b) => b.length > a.length ? b : a );
console.log(`The longest word in the array is ${longestWord(words)}`);

// Iteration #3: Calculate the sum
// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Declare a function named sumNumbers that returns the sum 
const sumNumbers = numbers.reduce((curr, sum) => curr + sum, 0);
console.log(`The sum of all numbers is ${sumNumbers}`);

// Create a new function sum() that calculates the sum for array filled with (almost) any type of data.
// Note that strings should have their length added to the total, and boolean values should be coerced into
// their corresponding numeric values. Check the tests for more details.
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum = (arr) => {
  let sum = 0;

  arr.map(item => {
    if (typeof item === 'string') {
      sum += item.split('').length;
    } else if(typeof item === Boolean) {
      sum += item.parseInt(item)
    } else {
      sum += item;
    }
  })

  return sum;
}

console.log(`The sum of all items in mixedArr is ${sum(mixedArr)}`);

const avg = (arr) => sum(arr) / arr.length;
console.log(`Average of mixed array is ${avg(mixedArr)}`);

const averageNumbers = (arrOfNumbers) => avg(arrOfNumbers);
console.log(`The average of all numbers is ${averageNumbers(numbers)}`);

const averageWordLength = (arrOfWords) => avg(arrOfWords);

console.log(`The average length of array of words is ${averageWordLength(words).toFixed(2)}`);

// return an unique array of words

const uniqueArr = (w) => {
  let uniqueWords = [];
  
  w.map(word => {
    if (uniqueWords.indexOf(word) === -1) {
      uniqueWords.push(word);
    }
  })
  
  return uniqueWords
}

console.log(`unique words ${uniqueArr(words)}`);
