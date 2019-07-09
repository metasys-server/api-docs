const fs = require('fs');
const fury = require('fury');
const apibParser = require('fury-adapter-apib-parser');
const loc = require('src-location');

const file = fs.readFileSync('build/index.apib', { encoding: 'utf8' });

fury.use(apibParser);

function output(classification, message) {
  if (classification === 'warning') {
    console.error(message);
  } else if (classification === 'error') {
    console.error(message);
  } else {
    console.log(message);
  }
}

fury.parse({ source: file }, function(err, result) {

  var errors = result.annotations.length;
  result.annotations.forEach(annotation => {
    const startIndex = annotation.sourceMapValue[0][0];
    // const endIndex = startIndex + annotation.sourceMapValue[0][1];
    const startLoc = loc.indexToLocation(file, startIndex);
    const classification = annotation.classes.content[0].content; // error or warning
    // const endLoc = loc.indexToLocation(file, endIndex);
    output(classification, `${classification}: ${annotation.content} (${startLoc.line}, ${startLoc.column + 1})`);
  });

  process.exit(errors);

});



