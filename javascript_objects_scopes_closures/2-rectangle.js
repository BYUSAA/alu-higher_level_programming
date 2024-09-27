#!/usr/bin/node // Informs the system to use Node.js to run this script

class Rectangle { // Defines a class named `Rectangle`
  constructor (w, h) { // Constructor method, takes `w` (width) and `h` (height) as arguments
    if (w > 0 && h > 0) { // Checks if both width and height are positive numbers
      this.width = w; // Assigns the width of the rectangle to `w`
      this.height = h; // Assigns the height of the rectangle to `h`
    }
  }
}

module.exports = Rectangle; // Exports the `Rectangle` class so it can be imported in other files
