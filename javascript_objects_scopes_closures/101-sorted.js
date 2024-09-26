#!/usr/bin/node

// Import the 'dict' object from the './101-data' module.
const inputDictionary = require('./101-data').dict;

// Create an empty object to store the reversed dictionary.
const reversedDictionary = {};

// Iterate over the key-value pairs of the input dictionary using Object.entries().
for (const [key, value] of Object.entries(inputDictionary)) {
  // If the value is not already a key in the reversed dictionary, add it with the current key as its value.
  if (reversedDictionary[value] === undefined) {
    reversedDictionary[value] = [key];
  } 
  // If the value is already a key in the reversed dictionary, append the current key to its value array.
  else {
    reversedDictionary[value].push(key);
  }
}

// Log the reversed dictionary to the console.
console.log(reversedDictionary);
