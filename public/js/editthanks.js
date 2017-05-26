$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/thanks/' + window.location.search.slice(4))
  .done((results) => {
    console.log('here');
    console.log(results, 'line 8');
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#thanks_name').attr({value: results.thanks_name});
    $('#photo_url').attr({value: results.photo_url});
    $('#description').attr({value: results.description});
    $('#business_link').attr({value: results.business_link});

  })
  .fail(() => {
    $('#thanksContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var id = $('#idInput').val();
    var thanks_name = $('#thanks_name').val();
    var photo_url = $('#photo_url').val();
    var description = $('#description').val();
    var business_link = $('#business_link').val();


    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/thanks/' + messageId,
      data: JSON.stringify({id, thanks_name, photo_url,  description, business_link}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/thanks.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#idInput').val();
    var thanks_name = $('#thanks_name').val();
    var photo_url = $('#photo_url').val();
    var description = $('#description').val();
    var business_link = $('#business_link').val();


    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/thanks/' + messageId,
      data: JSON.stringify({thanks_name, photo_url,  description, business_link, id})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/thanks.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
