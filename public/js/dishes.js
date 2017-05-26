$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
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
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/dishes',
      data: JSON.stringify({prepared_by, description, ingredients, photo_url, paired_with, paired_logo, paired_with_desc, servedfrom, servedfrom_logo, location_url}),
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

  $.getJSON('http://cap-backend.herokuapp.com/api/dishes')
    .done((results) => {
      var $container = $('#dishmessageContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $plate_name = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].plate_name);
        var $one = $('<h6>').text('--********************-- ');
        var $two = $('<h6>').text(' ');
        var $three = $('<h6>').text(' ');
        var $four = $('<h6>').text(' ');
        var $five = $('<h6>').text(' ');
        var $six = $('<h6>').text(' ');
        var $seven = $('<h6>').text(' ');
        var $eight = $('<h6>').text(' ');
        var $prepared_by = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].prepared_by);
        var $description = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].description);
        var $ingredients = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].ingredients);
        var $photo_url = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].photo_url);
        var $paired_with = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].paired_with);
        var $paired_logo = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].paired_logo);
        var $paired_with_desc = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].paired_with_desc);
        var $servedfrom = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].servedfrom);
        var $servedfrom_logo = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].servedfrom_logo);
        var $location_url = $('<a>').attr({href: "/editdishes.html?id=" + results[i].id}).text(results[i].location_url);


        $container.append($one);
        $container.append($plate_name);
        $container.append($two);

        $container.append($three);
        $container.append($prepared_by);
        $container.append($four);
        $container.append($description);
        $container.append($five);
        $container.append($ingredients);
        $container.append($six);
        $container.append($photo_url);
        $container.append($seven);
        $container.append($paired_with);
        $container.append($eight);
        $container.append($paired_logo);
        $container.append($eight);
        $container.append($paired_with_desc);
        $container.append($eight);
        $container.append($servedfrom);
        $container.append($eight);
        $container.append($servedfrom_logo);
        $container.append($eight);
        $container.append($location_url);
      }
    })
    .fail(() => {
      $('#dishmessageContainer').text("Could not get messages");
    })


    // start dishes




})
