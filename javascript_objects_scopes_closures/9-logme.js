#!/usr/bin/node

// Define a function that is exported as a module, which takes a base as an argument.
exports.converter = function (base) {
  // Return a new function that takes a number as an argument and converts it to the specified base.
  return (num) => {
    // Use the toString() method to convert the number to a string representation in the specified base.
    num.toString(base);
  }
}
