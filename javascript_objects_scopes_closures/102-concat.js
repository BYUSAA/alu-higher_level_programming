#!/usr/bin/node

// Import the 'fs' module, which provides functions for interacting with the file system.
const fs = require('fs');

// Extract the source file paths and destination file path from the command line arguments.
// process.argv.slice(2) returns an array of command line arguments, excluding the first two (node executable and script name).
const [sourceFilePath1, sourceFilePath2, destinationFilePath] = process.argv.slice(2);

try {
  // Read the contents of the first source file into a string, using 'utf-8' encoding.
  const content1 = fs.readFileSync(sourceFilePath1, 'utf-8');
  
  // Read the contents of the second source file into a string, using 'utf-8' encoding.
  const content2 = fs.readFileSync(sourceFilePath2, 'utf-8');
  
  // Write the concatenated contents of the two source files to the destination file.
  fs.writeFileSync(destinationFilePath, content1 + content2);
} catch (error) {
  // If an error occurs during file reading or writing, log the error message to the console.
  console.error(error.message);
}
