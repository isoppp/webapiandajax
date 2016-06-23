$(function () {
  var url = '/zininaru/';
  var $requestBtn = $('.js-request');
  var addClassName = 'is-disabled';
  var resultClassName = 'js-request-result';
  var stateTextTemplate = ['今日の診察は難しいようです。ビオフェルミンを買って耐えましょう。', '病院に行けば今日診察が受けられるようです。']
  var waitingTextTemplate = function (peopleNum) {
    return '予約待ちの人数は' + peopleNum + '人です。';
  };

  function createData() {
    return {};
  }

  function request($btn) {
    var data = createData();
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
    console.log(data);
    $btn.addClass(addClassName);
    $btn.text('痔になりました');

    var text = stateTextTemplate[parseInt(data.state)] + waitingTextTemplate(data.waiting);
    $btn.siblings().filter('.js-request-result').text(text).addClass(data.state ? 'is-success' : 'is-error');
    console.log(typeof data.state);
    if(data.state === 1) {
      console.log('post!');
      postCountAPI()
    };
  }

  function error() {
  }

  function postCountAPI(){
    $.ajax({
      type: "POST",
      url: '/count/',
      data: createData(),
      success: postCountSuccess,
      error: postCountError
    });
  }

  function postCountSuccess(){}
  function postCountError(){}

  $requestBtn.on('click', function () {
    var $this = $(this);
    if (!$this.hasClass(addClassName)) request($this);
  });
});