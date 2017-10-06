const request = require('request');
const yargs = require('yargs');

const smry = require('./summary-api/smry');
const smry2 = require('./node-summary/summary-package');

const argv = yargs
  .options({
    url: {
      alias: 'u',
      demand: false,
      describe: 'url to summarize',
      string: true
    },
    content: {
      alias: 'c',
      demand: false,
      describe: 'Content to summarize',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


if (typeof argv.url !== 'undefined') {
  smry.getApi(argv.url, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.content);
    }
  })
}

if (typeof argv.content !== 'undefined') {
  smry2.getSum('fauzan', argv.content, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.content);
    }
  })
}
