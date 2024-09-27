#!/usr/bin/node // Informs the system to use Node.js to run this script

const fs = require('fs'); // Imports the 'fs' (file system) module to handle file operations

fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (error) => { // Writes data from the third command-line argument to the file specified in the second argument
  if (error) console.log(error); // Logs any error that occurs during the file write operation
});
