#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests
const fs = require('fs'); // Imports the 'fs' (file system) module to handle file operations

const url = process.argv[2]; // The URL to fetch, provided as the second command-line argument
const filePath = process.argv[3]; // The file path to save the response, provided as the third command-line argument

request(url, (error, response, body) => { // Makes an HTTP request to the given URL
  if (error) { // Checks if there was an error during the request
    console.error(`Error fetching URL: ${error}`); // Logs an error message if the request failed
  } else { // If the request was successful
    fs.writeFile(filePath, body, 'utf-8', (err) => { // Writes the response body to the specified file
      if (err) { // Checks if there was an error during the file write operation
        console.error(`Error writing file: ${err}`); // Logs an error message if the file write failed
      }
    });
  }
});
