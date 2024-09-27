#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests

request(process.argv[2], function (err, res, body) { // Makes an HTTP request to the URL provided as the second command-line argument
  if (err) { // Checks if there was an error during the request
    console.error(err); // Logs the error to the console
  } else { // If the request was successful
    console.log(`code: ${res.statusCode}`); // Logs the HTTP status code of the response to the console
  }
});
