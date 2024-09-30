#!/usr/bin/node
const fetch = require('node-fetch');

async function fetchStatusCode (url) {
  try {
    const response = await fetch(url);
    console.log(`code: ${response.status}`);
  } catch (err) {
    console.error(err);
  }
}

fetchStatusCode(process.argv[2]);
