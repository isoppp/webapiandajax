var request = require('request');
var urlRoot = 'http://jsonplaceholder.typicode.com';

var options = {
  url: urlRoot + '/users/'
};

request(options, function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(body);
  } else {
    console.log('error: '+ error);
    console.log('statuscode: '+ response.statusCode);
  }
});