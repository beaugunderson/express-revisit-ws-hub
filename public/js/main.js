$(function () {
  var ws = new WebSocket('ws://ws.revisit.link');
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

  setInterval(function () {
    document.location.reload();
  }, 60000 * 10);
});

