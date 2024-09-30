#!/usr/bin/node
const fs = require('fs');

function readFileContent(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFileContent(process.argv[2]);
