#!/usr/bin/node
const http = require('http');
const https = require('https');

function fetchStatusCode (urlStr) {
  const parsedUrl = new URL(urlStr); // Using URL constructor instead of url.parse

  const protocol = parsedUrl.protocol === 'https:' ? https : http;

  protocol.get(urlStr, (res) => {
    console.log(`code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(err);
  });
}

fetchStatusCode(process.argv[2]);
