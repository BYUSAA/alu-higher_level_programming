#!/usr/bin/node // Informs the system to run the script using Node.js

module.exports = class Square extends require('./5-square.js') { // Exports a class `Square` that extends a class from '5-square.js'

  charPrint (c) { // Method `charPrint` that prints the square using the character `c`, or default if not provided
    if (c === undefined) { // If no character `c` is provided
      this.print(); // Call the inherited `print` method to print the square with default character
    } else { 
      for (let i = 0; i < this.height; i++) { // Loop through the height of the square
        console.log(c.repeat(this.width)); // Print the character `c` repeated `width` times
      }
    }
  }
}; // Close the class definition and export it
