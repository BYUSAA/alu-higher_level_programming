#!/usr/bin/node // Informs the system to use Node.js to run this script

const req = require('request'); // Imports the 'request' module to make HTTP requests

const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`; // Constructs the URL using the film ID provided as the second command-line argument

req.get(url, (err, res) => { // Makes a GET request to the constructed URL
  if (err) { // Checks if there was an error during the request
    console.error(err); // Logs the error to the console
  } else { // If the request was successful
    console.log(JSON.parse(res.body).title); // Parses the response body as JSON and logs the film's title to the console
  }
});
