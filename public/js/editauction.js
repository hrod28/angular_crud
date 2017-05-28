$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/posts/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#title').attr({value: results.title});
    $('#description').attr({value: results.description});
    $('#picture_url').attr({value: results.picture_url});


  })
  .fail(() => {
    $('#auctionContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    console.log("CLICKED");
    var id = $('#id').val();
    var title = $('#title').val();
    var description = $('#description').val();
    var picture_url = $('#picture_url').val();

    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/posts' + messageId,
      data: JSON.stringify({id, title, description, picture_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/auction.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#id').val();
    var title = $('#title').val();
    var description = $('#description').val();
    var picture_url = $('#picture_url').val();


    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/posts' + messageId,
          data: JSON.stringify({id, title, description, picture_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/auction.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
