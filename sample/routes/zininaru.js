var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

function makeRandom(max, min) {
  return ( Math.random() * ( ( max + 1 ) - min ) ) + min
}
router.post('/', function (req, res, next) {
  const reqJson = req.body;
  res.contentType('application/json');
  var result = {state: Math.floor(Math.random() + 0.5) + 1 - 1, waiting: Math.floor(makeRandom(200, 0))};
  res.send(JSON.stringify(result));
});

module.exports = router;
