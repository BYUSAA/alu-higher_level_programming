#!/usr/bin/node // Tells the operating system to run this script with Node.js

const Rectangle = require('./4-rectangle'); // Imports the `Rectangle` class from the file '4-rectangle.js'

class Square extends Rectangle { // Defines a class `Square` that extends (inherits from) the `Rectangle` class
  constructor (size) { // Constructor for the `Square` class, which takes `size` as an argument
    super(size, size); // Calls the parent class `Rectangle` constructor with both width and height set to `size`
  }
}

module.exports = Square; // Exports the `Square` class to make it available in other files
