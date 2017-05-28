$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/comments/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);

    $('#id').attr({value: results[0].id});
    $('#time').attr({value: results[0].time});
    $('#title').attr({value: results[0].title});
    $('#description').attr({value: results[0].description});

  })
  .fail(() => {
    $('#scheduleContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var id = $('#id').val();
    var time = $('#time').val();
    var title = $('#title').val();
    var description = $('#description').val();


    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/comments/' + messageId,
      data: JSON.stringify({id, time, title,  description}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/schedule.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#id').val();
    var time = $('#time').val();
    var title = $('#title').val();
    var description = $('#description').val();


    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/comments/' + messageId,
      data: JSON.stringify({id, time, title,  description})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/schedule.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
