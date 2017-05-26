$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/dishes/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#plate_name').attr({value: results.plate_name});
    $('#prepared_by').attr({value: results.prepared_by});
    $('#description').attr({value: results.description});
    $('#ingredients').attr({value: results.ingredients});
    $('#photo_url').attr({value: results.photo_url});
    $('#paired_with').attr({value: results.paired_with});
    $('#paired_logo').attr({value: results.paired_logo});
    $('#paired_with_desc').attr({value: results.paired_with_desc});
    $('#servedfrom').attr({value: results.servedfrom});
    $('#servedfrom_logo').attr({value: results.servedfrom_logo});
    $('#location_url').attr({value: results.location_url});

  })
  .fail(() => {
    $('#messageContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var id = $('#idInput').val();
    var prepared_by = $('#prepared_by').val();
    var description = $('#description').val();
    var ingredients = $('#ingredients').val();
    var photo_url = $('#photo_url').val();
    var paired_with = $('#paired_with').val();
    var paired_logo = $('#paired_logo').val();
    var paired_with_desc = $('#paired_with_desc').val();
    var servedfrom = $('#servedfrom').val();
    var servedfrom_logo = $('#servedfrom_logo').val();
    var location_url = $('#location_url').val();

    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/dishes/' + messageId,
      data: JSON.stringify({prepared_by, description, ingredients, photo_url, paired_with, paired_logo, paired_with_desc, servedfrom, servedfrom_logo, location_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/dishes.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#idInput').val();
    var prepared_by = $('#prepared_by').val();
    var description = $('#description').val();
    var ingredients = $('#ingredients').val();
    var photo_url = $('#photo_url').val();
    var paired_with = $('#paired_with').val();
    var paired_logo = $('#paired_logo').val();
    var paired_with_desc = $('#paired_with_desc').val();
    var servedfrom = $('#servedfrom').val();
    var servedfrom_logo = $('#servedfrom_logo').val();
    var location_url = $('#location_url').val();

    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/dishes/' + messageId,
      data: ({prepared_by, description, ingredients, photo_url, paired_with, paired_logo, paired_with_desc, servedfrom, servedfrom_logo, location_url})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/dishes.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
