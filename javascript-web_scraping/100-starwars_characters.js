#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`; // Constructs the URL using the film ID passed as a command-line argument

request(url, (err, res, body) => { // Makes a request to the URL and handles the response
  if (!err) { // If no error occurred during the request
    const characters = JSON.parse(body).characters; // Parses the response body and extracts the 'characters' array
    characters.forEach(character => { // Iterates over each character URL in the array
      request(character, (err, res, body) => { // Makes a request to each character URL to get character details
        if (!err) { // If no error occurred during the request
          console.log(JSON.parse(body).name); // Prints the name of the character
        }
      });
    });
  }
});
