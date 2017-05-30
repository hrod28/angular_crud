$(document).ready(() => {

  $('#submitButton').click((e) => {
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
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/brewers',
      data: JSON.stringify({id, name, brewery, brewery_logo, featured_drink, description, serving_location, photo_url, brewery_url}),
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

  $.getJSON('http://cap-backend.herokuapp.com/api/brewers')
    .done((results) => {
      var $container = $('#brewerContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $name = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].name);
        var $one = $('<h6>').text('--********************-- START NEW RECORD HERE --**************************-- ');
        var $two = $('<h6>').text(' ');
        var $id = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].id);
        var $three = $('<h6>').text(' ');
        var $four = $('<h6>').text(' ');
        var $five = $('<h6>').text(' ');
        var $six = $('<h6>').text(' ');
        var $seven = $('<h6>').text(' ');
        var $eight = $('<h6>').text(' ');
        var $brewery = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].brewery);
        var $brewery_logo = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].brewery_logo);
        var $featured_drink = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].featured_drink);
        var $description = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].description);
        var $serving_location = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].serving_location);
        var $photo_url = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].photo_url);
        var $brewery_url = $('<a>').attr({href: "/editbrewers.html?id=" + results[i].id}).text(results[i].brewery_url);

        $container.append($id);
        $container.append($one);
        $container.append($name);
        $container.append($two);

        $container.append($three);
        $container.append($brewery);
        $container.append($four);
        $container.append($brewery_logo);
        $container.append($five);
        $container.append($featured_drink);
        $container.append($six);
        $container.append($description);
        $container.append($seven);
        $container.append($serving_location);
        $container.append($eight);
        $container.append($photo_url);
        $container.append($eight);
        $container.append($brewery_url);

      }
    })
    .fail(() => {
      $('#brewerContainer').text("Could not get messages");
    })


    // start dishes




})
