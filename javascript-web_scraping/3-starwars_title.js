#!/usr/bin/node
const fetch = require('node-fetch');

async function getFilmTitle(filmId) {
  try {
    const response = await fetch(`https://swapi-api.hbtn.io/api/films/${filmId}`);
    const film = await response.json();
    console.log(film.title);
  } catch (error) {
    console.error(error);
  }
}

getFilmTitle(process.argv[2]);
