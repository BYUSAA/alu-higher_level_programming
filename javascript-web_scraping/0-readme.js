#!/usr/bin/node // Informs the system to use Node.js to run this script

const fs = require('fs'); // Imports the 'fs' (file system) module to handle file operations

fs.readFile(process.argv[2], 'utf8', (err, data) => { // Reads the file specified by the second command-line argument in UTF-8 encoding
  if (err) { // Checks if there was an error during the file read operation
    console.log(err); // Logs the error to the console
  } else { // If the file was read successfully
    console.log(data.toString()); // Converts the data to a string and logs it to the console
  }
});
