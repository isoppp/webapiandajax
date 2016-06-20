var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  const reqJson = req.body;
  res.contentType('application/json');
  var result = {state: 0, wating: 0};

  function setResult(state, wating) {
    result.state = state;
    result.wating = wating;
  }

  if (reqJson.user_id === '1') setResult(0, 23);
  if (reqJson.user_id === '2') setResult(1, 256);
  if (reqJson.user_id === '3') setResult(0, 7);
  if (reqJson.user_id === '4') setResult(0, 3);
  if (reqJson.user_id === '5') setResult(1, 120);

  res.send(JSON.stringify(result));
});

module.exports = router;
