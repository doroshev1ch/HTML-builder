const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const fileName = path.join(__dirname, 'input.txt');

rline.setPrompt('Write text: ');
rline.prompt();

rline.on('line', (text) => {
    fs.appendFile(fileName, text + '\n', (err) => {
      if (err) {
        console.log('Error writing to file:', err);
      } else {
        console.log('Text written to file');
        rline.prompt();
      }
    });
  });

rline.on('close', () => {
    console.log('Work completed');
  });