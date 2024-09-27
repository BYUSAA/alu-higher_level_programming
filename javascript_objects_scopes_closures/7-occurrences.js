#!/usr/bin/node // Tells the OS to use Node.js to run this script

exports.nbOccurences = function (list, searchElement) { // Exports a function named `nbOccurences` with two parameters: `list` (an array) and `searchElement`
  return list.reduce( // Uses the `reduce` method to count occurrences of `searchElement` in the list
    (count, current) => (current === searchElement ? count + 1 : count), // Callback function: if `current` equals `searchElement`, increment `count`
    0 // Initial value of `count` set to 0
  );
}; // Closes the function and exports it
