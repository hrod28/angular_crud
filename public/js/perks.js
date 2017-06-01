$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#id').val();
    var time = $('#time').val();
    var title = $('#title').val();
    var description = $('#description').val();
    var picture_url = $('#picture_url').val();

    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/perks',
      data: JSON.stringify({id, time, title, description, picture_url})
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

  $.getJSON('http://cap-backend.herokuapp.com/api/perks')
    .done((results) => {
      var $container = $('#perksContainer');
      console.log("RESULTS: thisone", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $time = $('<a>').attr({href: "/editperks.html?id=" + results[i].id}).text(results[i].time);
        var $title = $('<a>').attr({href: "/editperks.html?id=" + results[i].id}).text(results[i].title);
        var $description = $('<a>').attr({href: "/editperks.html?id=" + results[i].id}).text(results[i].description);
        var $picture_url = $('<a>').attr({href: "/editperks.html?id=" + results[i].id}).text(results[i].picture_url);
        var $one = $('<h6>').text('--********************-- START NEW RECORD HERE --**************************-- ');
        var $two = $('<h6>').text(' time:');
        var $three = $('<h6>').text('title ');
        var $four = $('<h6>').text('description ');
        var $five = $('<h6>').text('URL of photo ');



        $container.append($one);
        $container.append($two);
        $container.append($time);
        $container.append($three);

        $container.append($title);
        $container.append($four);

        $container.append($description);
        $container.append($five);
        $container.append($picture_url);
        // console.log($description);

      }
    })
    .fail(() => {
      $('#perksContainer').text("Could not get messages");
    })








})
