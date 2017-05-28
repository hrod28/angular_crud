$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#id').val();
    var map_photo = $('#map_photo').val();


    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://localhost:3000/api/votes',
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

  $.getJSON('http://localhost:3000/api/votes')
    .done((results) => {
      var $container = $('#mapContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $map_photo = $('<a>').attr({href: "/editmap.html?id=" + results[i].id}).text(results[i].map_photo);
        var $one = $('<h6>').text('--********************-- ');
        var $two = $('<h6>').text(' ');


        $container.append($one);
        $container.append($map_photo);
        $container.append($two);


      }
    })
    .fail(() => {
      $('#mapContainer').text("Could not get messages");
    })








})
