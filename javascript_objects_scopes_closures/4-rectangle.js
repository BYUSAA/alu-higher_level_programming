#!/usr/bin/node // Informs the system to use Node.js to run the script

class Rectangle { // Defines a class named `Rectangle`
  constructor (w, h) { // Constructor method, takes width `w` and height `h` as parameters
    if (w > 0 && h > 0) { // Ensures that both width and height are positive values
      this.width = w; // Sets the width of the rectangle
      this.height = h; // Sets the height of the rectangle
    }
  }

  print () { // Method to print the rectangle using the character 'X'
    for (let i = 0; i < this.height; i++) { // Loops through each row based on the rectangle's height
      console.log('X'.repeat(this.width)); // Prints 'X' repeated `width` times for each row
    }
  }

  rotate () { // Method to swap the width and height of the rectangle
    [this.width, this.height] = [this.height, this.width]; // Swaps width and height values
  }

  double () { // Method to double the size of the rectangle
    this.width = this.width * 2; // Doubles the width
    this.height = this.height * 2; // Doubles the height
  }
}

module.exports = Rectangle; // Exports the `Rectangle` class so it can be used in other files
