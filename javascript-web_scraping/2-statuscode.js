#!/usr/bin/node
const http = require('http');
const https = require('https');
const url = require('url');

function fetchStatusCode (urlStr) {
  const parsedUrl = url.parse(urlStr); // Parse the URL to detect the protocol

  const protocol = parsedUrl.protocol === 'https:' ? https : http;

  protocol.get(urlStr, (res) => {
    console.log(`code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(err);
  });
}

fetchStatusCode(process.argv[2]);
