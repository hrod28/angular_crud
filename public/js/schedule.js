$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#id').val();
    var time = $('#time').val();
    var title = $('#title').val();
    var description = $('#description').val();

    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/comments',
      data: JSON.stringify({id, time, title, description})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/schedule.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });

  $.getJSON('http://cap-backend.herokuapp.com/api/comments')
    .done((results) => {
      var $container = $('#scheduleContainer');
      console.log("RESULTS: thisone", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $time = $('<a>').attr({href: "/editschedule.html?id=" + results[i].id}).text(results[i].time);
        var $title = $('<a>').attr({href: "/editschedule.html?id=" + results[i].id}).text(results[i].title);
        var $description = $('<a>').attr({href: "/editschedule.html?id=" + results[i].id}).text(results[i].description);
        var $one = $('<h6>').text('--********************-- START NEW RECORD HERE --**************************-- ');
        var $two = $('<h6>').text(' time:');
        var $three = $('<h6>').text('title ');
        var $four = $('<h6>').text('description ');



        $container.append($one);
        $container.append($two);
        $container.append($time);
        $container.append($three);

        $container.append($title);
        $container.append($four);

        $container.append($description);
        // console.log($description);

      }
    })
    .fail(() => {
      $('#scheduleContainer').text("Could not get messages");
    })








})
