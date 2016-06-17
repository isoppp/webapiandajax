$(function () {
  console.log('ok');

  var root = 'http://jsonplaceholder.typicode.com';
  var url = root + '/users/';
  var $requestBtn = $('.js-request');
  var $setResponse = $('.js-setResponse');
  var defaultText = $requestBtn.text();

  function request() {
    $requestBtn.text('loading...' + ' ' + url);
    $.ajax({
      type: "GET",
      url: url,
      success: success,
      error: error
    });
  }

  function success(json) {
    $requestBtn.text(defaultText);
    $('.js-response').html(JSON.stringify(json, null, '  '));

    console.log(json);
    json.forEach(function (item) {
      $setResponse.append($('<li>').text('Item!!!'));
      $setResponse.append($('<li>').text(item.name));
      $setResponse.append($('<li>').text(item.email));
    });
    $setResponse.find('li').addClass('list-group-item');

  }

  function error() {
    $requestBtn.text(defaultText);
  }

  $requestBtn.on('click', request);
});