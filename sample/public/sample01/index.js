$(function () {
  console.log('ok');

  var root = 'http://jsonplaceholder.typicode.com';
  var url = root + '/users/';
  var $requestBtn = $('.js-request');
  var $setResponse = $('.js-setResponse');
  var defaultText = $requestBtn.text();
  var $template = $('<li>').addClass('list-group-item');

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
      $setResponse.append($template.clone().text('Item!!!'));
      $setResponse.append($template.clone().text(item.name));
      $setResponse.append($template.clone().text(item.email));
    });
  }

  function error() {
    $requestBtn.text(defaultText);
  }

  $requestBtn.on('click', request);
});