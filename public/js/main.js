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
});

