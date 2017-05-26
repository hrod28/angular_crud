$(document).ready(() => {

  $('#submitButton').click((e) => {
    console.log("CLICKED");
    var id = $('#idInput').val();
    var thanks_name = $('#thanks_name').val();
    var photo_url = $('#photo_url').val();
    var description = $('#description').val();
    var business_link = $('#business_link').val();

    var options = {
      contentType: 'application/json',
      type: 'POST',
      url: 'http://cap-backend.herokuapp.com/api/thanks',
      data: JSON.stringify({id, thanks_name, description, photo_url, business_link})
    }

    $.ajax(options)
      .done(() => {
        console.log("DONE");
        window.location.href = '/thanks.html';
      })
      .fail(($xhr) => {
        console.log($xhr);
      })
  });

  $.getJSON('http://cap-backend.herokuapp.com/api/thanks')
    .done((results) => {
      var $container = $('#thanksContainer');
      console.log("RESULTS: ", results);
      for(var i = 0; i < results.length; i++){
        // console.log(results[i]);
        var $div = $('<div>').addClass('message');
        var $thanks_name = $('<a>').attr({href: "/editthanks.html?id=" + results[i].id}).text(results[i].thanks_name);
        var $one = $('<h6>').text('--********************-- ');
        var $two = $('<h6>').text(' ');
        var $three = $('<h6>').text(' ');

        var $photo_url = $('<a>').attr({href: "/editthanks.html?id=" + results[i].id}).text(results[i].photo_url);
        var $description = $('<a>').attr({href: "/editthanks.html?id=" + results[i].id}).text(results[i].description);
        var $business_link = $('<a>').attr({href: "/editthanks.html?id=" + results[i].id}).text(results[i].business_link);


        $container.append($one);
        $container.append($thanks_name);
        $container.append($two);

        $container.append($description);
        $container.append($three);
        $container.append($photo_url);
        $container.append($three);
        $container.append($business_link);
        console.log('#thanksContainer');

      }
    })
    .fail(() => {
      $('#thanksContainer').text("Could not get messages");
    })








})
