const SummaryTool = require('node-summary');

var getSum = (title, content, callback) => {
  SummaryTool.summarize(title, content, function(err, summary) {
    if (err) callback("Something went wrong man!");

    callback(undefined, {
      content: content
    })
    /*
        console.log("Original Length " + (title.length + content.length));
        console.log("Summary Length " + summary.length);
        console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
        */
  });
}

module.exports.getSum = getSum;
