$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/votes/' + window.location.search.slice(4))
  .done((results) => {
    console.log('here');
    console.log(results, 'line 8');
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#map_photo').attr({value: results.map_photo});


  })
  .fail(() => {
    $('#mapContainer').text("Could not get messages");
  })


  $('#editButton').click(() => {
    var id = $('#id').val();
    var map_photo = $('#map_photo').val();



    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/votes/' + messageId,
      data: JSON.stringify({id, map_photo }),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/map.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#id').val();
    var map_photo = $('#map_photo').val();


    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/votes/' + messageId,
      data: JSON.stringify({id, map_photo})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/map.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
