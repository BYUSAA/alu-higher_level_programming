#!/usr/bin/node
const https = require('https');

function fetchStatusCode (url) {
  https.get(url, (res) => {
    console.log(`code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(err);
  });
}

fetchStatusCode(process.argv[2]);
