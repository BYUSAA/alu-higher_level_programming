#!/usr/bin/node
const fs = require('fs').promises;

async function writeFileContent (filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
  } catch (error) {
    console.log(error);
  }
}

writeFileContent(process.argv[2], process.argv[3]);
