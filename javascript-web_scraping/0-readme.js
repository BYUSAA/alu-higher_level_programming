#!/usr/bin/node
const fs = require('fs').promises;

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFileContent(process.argv[2]);
