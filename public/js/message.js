$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/chefs/' + window.location.search.slice(4))
    .done((results) => {
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#nameInput').attr({value: results.name});
    $('#messageInput').attr({value: results.restaurant});
    $('#restaurant_logo').attr({value: results.restaurant_logo});
    $('#paired_with').attr({value: results.paired_with});
    $('#paired_logo').attr({value: results.paired_logo});
    $('#serving_location').attr({value: results.serving_location});
    $('#serving_photo').attr({value: results.serving_photo});
    $('#photo_url').attr({value: results.photo_url});
    $('#restaurant_url').attr({value: results.restaurant_url});

  })
  .fail(() => {
    $('#messageContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    var id = $('#idInput').val();
    var name = $('#nameInput').val();
    var restaurant = $('#messageInput').val();
    var restaurant_logo = $('#restaurant_logo').val();
    var paired_with = $('#paired_with').val();
    var paired_logo = $('#paired_logo').val();
    var serving_location = $('#serving_location').val();
    var serving_photo = $('#serving_photo').val();
    var photo_url = $('#photo_url').val();
    var restaurant_url = $('#restaurant_url').val();

    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/chefs/' + messageId,
      data: JSON.stringify({name, restaurant, restaurant_logo, paired_with, paired_logo, serving_location, serving_photo, photo_url, restaurant_url}),
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
    var id = $('#idInput').val();
    var name = $('#nameInput').val();
    var restaurant = $('#messageInput').val();
    var restaurant_logo = $('#restaurant_logo').val();
    var paired_with = $('#paired_with').val();
    var serving_location = $('#serving_location').val();
    var serving_photo = $('#serving_photo').val();
    var photo_url = $('#photo_url').val();
    var restaurant_url = $('#restaurant_url').val();

    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/chefs/' + messageId,
      data: JSON.stringify({name, restaurant, serving_photo, restaurant_logo, paired_with, paired_logo, serving_location, photo_url, restaurant_url})
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
