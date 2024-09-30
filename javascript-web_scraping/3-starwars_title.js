#!/usr/bin/node
const fetch = require('node-fetch');

const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.title);
  })
  .catch(error => {
    console.error(error);
  });
