$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#idInput').val();
    var name = $('#nameInput').val();
    var restaurant = $('#messageInput').val();
    var restaurant_logo = $('#restaurant_logo').val();
    var paired_with = $('#paired_with').val();
    var paired_logo = $('#paired_logo').val();
    var serving_location = $('#serving_location').val();
    // var serving_ = $('#serving_photo').val();
    var serving_photo = $('#serving_photo').val();
    var photo_url = $('#photo_url').val();
    var restaurant_url = $('#restaurant_url').val();

    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/chefs',
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

  $.getJSON('http://cap-backend.herokuapp.com/api/chefs')
    .done((results) => {
      var $container = $('#messageContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $name = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].name);
        var $one = $('<h6>').text('--********************-- START NEW RECORD HERE --**************************-- ');
        var $two = $('<h6>').text('restaurant: ');
        var $three = $('<h6>').text('url of restaurant logo: ');
        var $four = $('<h6>').text('paired_with ');
        var $five = $('<h6>').text('url of paired_logo ');
        var $six = $('<h6>').text(' serving_location');
        var $seven = $('<h6>').text('url of chef photo ');
        var $eight = $('<h6>').text(' restaurant_url');
        var $nine = $('<h6>').text(' url of serving location photo');
        var $link = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].restaurant);
        var $restaurant_logo = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].restaurant_logo);
        var $paired_with = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].paired_with);
        var $paired_logo = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].paired_logo);
        var $serving_location = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].serving_location);
        var $serving_photo = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].serving_photo);
        var $photo_url = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].photo_url);
        var $restaurant_url = $('<a>').attr({href: "/chefs.html?id=" + results[i].id}).text(results[i].restaurant_url);


        $container.append($one);
        $container.append($name);
        $container.append($two);
        $container.append($link);
        $container.append($three);
        $container.append($restaurant_logo);
        $container.append($four);
        $container.append($paired_with);
        $container.append($five);
        $container.append($paired_logo);
        $container.append($six);
        $container.append($serving_location);
        $container.append($nine);
        $container.append($serving_photo);
        $container.append($seven);
        $container.append($photo_url);
        $container.append($eight);
        $container.append($restaurant_url);
      }
    })
    .fail(() => {
      $('#messageContainer').text("Could not get messages");
    })


    // start dishes




})
