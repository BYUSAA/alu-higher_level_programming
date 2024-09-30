#!/usr/bin/node
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readFileContent(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFileContent(process.argv[2]);
