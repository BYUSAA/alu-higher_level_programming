#!/usr/bin/node
const fs = require('fs');

function writeFileContent (filePath, content) {
  const stream = fs.createWriteStream(filePath, { encoding: 'utf8' });

  stream.write(content);

  stream.on('error', (error) => {
    console.log(error);
  });

  stream.end();
}

writeFileContent(process.argv[2], process.argv[3]);
