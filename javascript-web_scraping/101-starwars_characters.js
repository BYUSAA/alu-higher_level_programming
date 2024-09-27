#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`; // Constructs the URL using the film ID passed as a command-line argument

request(url, function (err, res, body) { // Makes a request to the URL and handles the response
  if (!err) { // If no error occurred during the request
    const characters = JSON.parse(body).characters; // Parse the response body and extract the 'characters' array
    printCharacters(characters, 0); // Calls the `printCharacters` function to print the names of characters
  }
});

function printCharacters (characters, index) { // Defines a recursive function to print character names in order
  request(characters[index], function (err, res, body) { // Makes a request to fetch character data at the given index
    if (!err) { // If no error occurred during the request
      console.log(JSON.parse(body).name); // Prints the name of the character
      if (index + 1 < characters.length) { // If there are more characters left to print
        printCharacters(characters, index + 1); // Recursively calls the function with the next index
      }
    }
  });
}
