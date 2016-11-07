var express = require('express');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/times', function(req, response) {
  request('https://www.reddit.com/r/gaming/top/.json?limit=1', function(err, r, body) {
    if (r.statusCode === 200) {
      response.send(body);
    } else {
      response.send('ouch');
    }
  })

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
