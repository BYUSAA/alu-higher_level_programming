#!/usr/bin/node // Informs the system to use Node.js to execute this script

class Rectangle { // Defines a class named `Rectangle`
  constructor (w, h) { // Constructor method, takes `w` (width) and `h` (height) as parameters
    this.width = w; // Assigns the width property to the value of `w`
    this.height = h; // Assigns the height property to the value of `h`
  }
}

module.exports = Rectangle; // Exports the `Rectangle` class for use in other modules/files
