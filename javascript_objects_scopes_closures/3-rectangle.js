#!/usr/bin/node // Informs the system to use Node.js to execute the script

class Rectangle { // Defines a class called `Rectangle`
  constructor (w, h) { // Constructor method, takes width `w` and height `h` as parameters
    if (w > 0 && h > 0) { // Checks if both width and height are positive values
      this.width = w; // Assigns the width property to `w`
      this.height = h; // Assigns the height property to `h`
    }
  }

  print () { // Method to print the rectangle using the character 'X'
    for (let i = 0; i < this.height; i++) { // Loops through each row based on the rectangle's height
      console.log('X'.repeat(this.width)); // Prints 'X' repeated `width` times for each row
    }
  }
}

module.exports = Rectangle; // Exports the `Rectangle` class to make it available for other modules/files
