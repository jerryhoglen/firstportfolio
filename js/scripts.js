 

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.743543, lng: -73.1851947},
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {lat: 40.743543, lng: -73.1851947},
    title:"Jerry's location!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
}

$(document).ready(function() {
    
    // Tooltip
    $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    });
    $(function () {
    $("#item1").tooltip();
    
});
    
    
    // Message Box 
$(".button").on("click", function() {
    var comment =$("#message-box").val();
    $("#visible-comment").html(comment);
    $("#message-box").hide();
    return false;
});
    
    //Running Character Count
$("#message-box").on("keyup", function() {
    var charCount = $("#message-box").val().length; 
    console.log(charCount); 
    $("#char-count").html(charCount);
    $("#char-count").css("color", "white");
    if(charCount > 50) {
        $("#char-count").css("color", "red");
    } else {
        $("#char-count").css("color", "white");
    };
    
});
    
    // Smooth Scrolling
      var $root = $("html, body");
      $(".navbar-nav a").click(function() {
        var href = $.attr(this, "href");
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
      });
    
    // Work Section
    for(var i = 0; i < works.length; ++i ) {
      $("#works").append("\
        <div class='col-md-4 col-sm-4 col-xs-12'>\
          <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'></p> [Work examples] </span>\
          </a>\
        </div>\
      "); 
      var images = $("#works img");
      if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
      $(images[i]).css("border", "2px solid salmon");
      };
      $(".work-img").mouseenter( function() {
      $(".info", this).show();
      }).mouseleave(function(){
      $(".info", this).hide();
      });
    };
    
});

