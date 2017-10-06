var request = require('request');

var getApi = (url, callback) => {

  request.post({
    url: `http://api.smmry.com/SM_API_KEY=5BF8AB72DC&SM_URL=${url}`,
    json: true

  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to API');
    }
    callback(undefined, {
      content: body.sm_api_content
    })
  })
}

module.exports.getApi = getApi;
