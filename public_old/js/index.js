$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var name = $('#nameInput').val();
    var message = $('#messageInput').val();

    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: '/messages',
      data: JSON.stringify({name, message}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });

  $.getJSON('/messages')
    .done((results) => {
      var $container = $('#messageContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $link = $('<a>').attr({href: "/message.html?id=" + results[i].id}).text(results[i].message);
        var $name = $('<h6>').text('-- ' + results[i].name);

        $container.append($link);
        $container.append($name);
      }
    })
    .fail(() => {
      $('#messageContainer').text("Could not get messages");
    })


})
