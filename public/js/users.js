$(document).ready(() => {

  $('#submitButton').click((e) => {
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
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/users',
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

  $.getJSON('http://cap-backend.herokuapp.com/api/users')
    .done((results) => {
      var $container = $('#userContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $first_name = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].first_name);
        var $one = $('<h6>').text('--********************-- START NEW RECORD HERE --**************************-- ');
        var $two = $('<h6>').text(' ');
        var $three = $('<h6>').text(' ');
        var $four = $('<h6>').text(' ');
        var $five = $('<h6>').text(' ');
        var $six = $('<h6>').text(' ');
        var $seven = $('<h6>').text(' ');
        var $eight = $('<h6>').text(' ');
        var $last_name = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].last_name);
        var $username = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].username);
        var $email = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].email);
        var $visited_all = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].visited_all);
        var $vote1 = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].vote1);
        var $vote2 = $('<a>').attr({href: "/editusers.html?id=" + results[i].id}).text(results[i].vote2);

        $container.append($one);
        $container.append($first_name);
        $container.append($two);

        $container.append($three);
        $container.append($last_name);
        $container.append($four);
        $container.append($username);
        $container.append($five);
        $container.append($email);
        $container.append($six);
        $container.append($visited_all);
        $container.append($seven);
        $container.append($vote1);
        $container.append($eight);
        $container.append($vote2);


      }
    })
    .fail(() => {
      $('#userContainer').text("Could not get messages");
    })


    // start dishes




})
