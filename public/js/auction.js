$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#id').val();
    var title = $('#title').val();
    var picture_url = $('#picture_url').val();
    var description = $('#description').val();


    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://localhost:3000/api/posts',
      data: JSON.stringify({id, description, title, picture_url}),
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/auction.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });

  $.getJSON('http://localhost:3000/api/posts')
    .done((results) => {
      var $container = $('#auctionContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $title = $('<a>').attr({href: "/editauction.html?id=" + results[i].id}).text(results[i].title);
        var $one = $('<h6>').text('--********************-- ');
        var $two = $('<h6>').text(' ');
        var $three = $('<h6>').text(' ');
        var $four = $('<h6>').text(' ');
        var $five = $('<h6>').text(' ');
        var $six = $('<h6>').text(' ');
        var $seven = $('<h6>').text(' ');
        var $eight = $('<h6>').text(' ');
        var $picture_url = $('<a>').attr({href: "/editauction.html?id=" + results[i].id}).text(results[i].picture_url);
        var $description = $('<a>').attr({href: "/editauction.html?id=" + results[i].id}).text(results[i].description);
        var $id = $('<a>').attr({href: "/editauction.html?id=" + results[i].id}).text(results[i].id);

        $container.append($id);
        $container.append($one);
        $container.append($three);
        $container.append($title);
        $container.append($two);

        $container.append($three);
        $container.append($description);
        $container.append($four);
        $container.append($picture_url);

      }
    })
    .fail(() => {
      $('#auctionContainer').text("Could not get messages");
    })


    // start dishes




})
