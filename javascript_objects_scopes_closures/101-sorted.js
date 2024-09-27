#!/usr/bin/node // Informs the system to use Node.js to run this script

const inputDictionary = require('./101-data').dict; // Imports the `dict` property from the module '101-data'

const reversedDictionary = {}; // Initializes an empty object to store the reversed dictionary
for (const [key, value] of Object.entries(inputDictionary)) { // Loops through each key-value pair in the input dictionary
  if (reversedDictionary[value] === undefined) { // Checks if the value is not yet a key in the reversed dictionary
    reversedDictionary[value] = [key]; // Creates a new array with the current key as its first element
  } else {
    reversedDictionary[value].push(key); // Adds the current key to the existing array for this value
  }
}
console.log(reversedDictionary); // Outputs the reversed dictionary to the console
