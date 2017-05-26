$(document).ready(() => {
  var messageId = window.location.search.slice(4);
   console.log("window.location.search with slice: ", window.location.search.slice(4));
   console.log("here");
  $.getJSON('http://cap-backend.herokuapp.com/api/users/' + window.location.search.slice(4))
  .done((results) => {
    console.log(results);
    // var result = results[0];
    $('#id').attr({value: results.id});
    $('#first_name').attr({value: results.first_name});
    $('#last_name').attr({value: results.last_name});
    $('#username').attr({value: results.username});
    $('#email').attr({value: results.email});
    $('#visited_all').attr({value: results.visited_all});
    $('#vote1').attr({value: results.vote1});
    $('#vote2').attr({value: results.vote2});



  })
  .fail(() => {
    $('#userContainer').text("Could not get messages");
  })

  $('#editButton').click(() => {
    console.log("CLICKED");
    var id = $('#idInput').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var username = $('#username').val();
    var email = $('#email').val();
    var visited_all = $('#visited_all').val();
    var vote1 = $('#vote1').val();
    var vote2 = $('#vote2').val();


    var options = {
      contentType: 'application/json',
      type: 'PATCH',
      url: 'http://cap-backend.herokuapp.com/api/users/' + messageId,
      data: JSON.stringify({first_name, last_name, username, email, visited_all, vote2, vote1}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/users.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });
  $('#deleteButton').click(() => {
    var id = $('#idInput').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var username = $('#username').val();
    var email = $('#email').val();
    var visited_all = $('#visited_all').val();
    var vote1 = $('#vote1').val();
    var vote2 = $('#vote2').val();

    var options = {
      contentType: 'application/json',
      type: 'DELETE',
      url: 'http://cap-backend.herokuapp.com/api/users/' + messageId,
          data: JSON.stringify({first_name, last_name, username, email, visited_all, vote2, vote1}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/users.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });



})
