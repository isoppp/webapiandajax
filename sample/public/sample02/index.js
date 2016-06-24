$(function () {
  var url = '/zininaru/';
  var $requestBtn = $('.js-request');
  var addClassName = 'is-disabled';
  var resultClassName = 'js-request-result';
  var stateTextTemplate = ['病院の予約ができませんでした。ボラギノールを買って耐えましょう。', '病院の予約が完了しました。'];
  var waitingTextTemplate = function (peopleNum) {
    return '予約待ちの人数は' + peopleNum + '人です。';
  };

  function createData($btn) {
    return {
      user_id: $btn.data('userid'),
      severity: $btn.data('severity')
    };
  }

  function request($btn) {
    var data = createData($btn);
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function (data) {
        success(data, $btn)
      },
      error: error
    });
  }

  function success(data, $btn) {
    $btn.addClass(addClassName);
    $btn.text('痔になりました');

    var text = stateTextTemplate[parseInt(data.state)] + waitingTextTemplate(data.waiting);
    $btn.siblings().filter('.js-request-result').text(text).addClass(data.state ? 'is-success' : 'is-error');
    if (data.state === 1) {
      postCountAPI($btn);
    }
  }

  function error() {
  }

  function postCountAPI($btn) {
    $.ajax({
      type: "POST",
      url: '/count/',
      data: createData($btn),
      success: postCountSuccess,
      error: postCountError
    });
  }

  function postCountSuccess() {
  }

  function postCountError() {
  }

  $requestBtn.on('click', function () {
    var $this = $(this);
    if (!$this.hasClass(addClassName)) request($this);
  });
});