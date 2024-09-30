#!/usr/bin/node
const fs = require('fs');

function readFileContent (filePath) { // Added space before parentheses
  const stream = fs.createReadStream(filePath, 'utf8');

  stream.on('data', (chunk) => {
    console.log(chunk);
  });

  stream.on('error', (err) => {
    console.log(err);
  });
}

readFileContent(process.argv[2]);
