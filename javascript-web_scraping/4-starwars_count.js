#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests

request(process.argv[2], function (err, res, body) { // Makes an HTTP request to the URL provided as the second command-line argument
  if (!err) { // Checks if there was no error during the request
    const results = JSON.parse(body).results; // Parses the response body as JSON and extracts the 'results' array
    console.log(
      results.reduce((count, film) => { // Reduces the 'results' array to count films that contain a specific character
        return film.characters.find((character) => character.endsWith('/18/')) // Checks if any character URL ends with '/18/' (specific character)
          ? count + 1 // If found, increments the count
          : count; // Otherwise, returns the count unchanged
      }, 0) // Initializes the count at 0
    );
  }
});
