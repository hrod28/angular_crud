$(document).ready(() => {
  var messageId = window.location.search.slice(4);
  // console.log("window.location.search with slice: ", window.location.search.slice(4));
  $.getJSON('/messages/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);
    // var result = results[0];
    $('#nameInput').attr({value: results.name});
    $('#messageInput').attr({value: results.message});
  })
  .fail(() => {
    $('#messageContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var name = $('#nameInput').val();
    var message = $('#messageInput').val();

    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: '/messages/' + messageId,
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
  $('#deleteButton').click(() => {
    var name = $('#nameInput').val();
    var message = $('#messageInput').val();

    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: '/messages/' + messageId,
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



})
