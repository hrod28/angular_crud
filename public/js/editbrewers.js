$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/brewers/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#name').attr({value: results.name});
    $('#brewery').attr({value: results.brewery});
    $('#brewery_logo').attr({value: results.brewery_logo});
    $('#featured_drink').attr({value: results.featured_drink});
    $('#description').attr({value: results.description});
    $('#serving_location').attr({value: results.serving_location});
    $('#photo_url').attr({value: results.photo_url});
    $('#brewery_url').attr({value: results.brewery_url});


  })
  .fail(() => {
    $('#brewerContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    console.log("CLICKED");
    var id = $('#idInput').val();
    var name = $('#name').val();
    var brewery = $('#brewery').val();
    var brewery_logo = $('#brewery_logo').val();
    var featured_drink = $('#featured_drink').val();
    var description = $('#description').val();
    var serving_location = $('#serving_location').val();
    var photo_url = $('#photo_url').val();
    var brewery_url = $('#brewery_url').val();

    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/brewers/' + messageId,
      data: JSON.stringify({name, brewery, brewery_logo, featured_drink, description, serving_location, photo_url, brewery_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/brewers.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#idInput').val();
    var name = $('#name').val();
    var brewery = $('#brewery').val();
    var brewery_logo = $('#brewery_logo').val();
    var featured_drink = $('#featured_drink').val();
    var description = $('#description').val();
    var serving_location = $('#serving_location').val();
    var photo_url = $('#photo_url').val();
    var brewery_url = $('#brewery_url').val();

    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/brewers/' + messageId,
          data: JSON.stringify({name, brewery, brewery_logo, featured_drink, description, serving_location, photo_url, brewery_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/brewers.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
