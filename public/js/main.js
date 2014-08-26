$(function () {
  var ws = new ReconnectingWebSocket('ws://ws.revisit.link');
  var display = $('.display');

  ws.onopen = function() {
    console.log('Connected');
  };

  ws.onmessage = function (event) {
    var li = $('<li></li>');
    var img = $('<img />');
    img.attr('src', event.data);

    display.prepend(li.append(img));
  };

  $('.full-screen').click(function() {
    var body = document.body;
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.msRequestFullscreen) {
      body.msRequestFullscreen();
    } else if (body.mozRequestFullScreen) {
      body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) {
      body.webkitRequestFullscreen();
    }
  });
});
