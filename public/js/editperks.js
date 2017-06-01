$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/perks/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);

    $('#id').attr({value: results.id});
    $('#time').attr({value: results.time});
    $('#title').attr({value: results.title});
    $('#description').attr({value: results.description});
    $('#picture_url').attr({value: results.picture_url});

  })
  .fail(() => {
    $('#perksContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var id = $('#id').val();
    var time = $('#time').val();
    var title = $('#title').val();
    var description = $('#description').val();
    var picture_url = $('#picture_url').val();


    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/perks/' + messageId,
      data: JSON.stringify({id, time, title,  description, picture_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/perks.html';
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
    var picture_url = $('#picture_url').val();


    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/perks/' + messageId,
      data: JSON.stringify({id, time, title,  description, picture_url})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/perks.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
