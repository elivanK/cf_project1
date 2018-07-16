//Not to wait until the document is ready

//Google map nesting via script.
var map;

function initMap() {
    //My lat and lng for my address stored in objects.
    var myLatLng = {
        lat: 52.501346,
        lng: 13.410782
    };
    //Linking the map id to the google map to display in div.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });
    //Addomg a marker on the map that shows a message my address
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Click to zoom'
    });
    //For the task to implement event listener behaviour so
    // that Google Maps interacts with user click event.
    //The event listener when a user click to zoom:
    map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
            map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });

}

// Twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
//To let jQuery  know to wait until the docmument/ DOM is ready.
$(document).ready(function() {
    //Smooth scrolling 
    var $root = $('html, body');
    $('#navbar-example a').click(function() {
        var href = $.attr(this, 'href');
        if (href != undefined && href != '#') {
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function() {
                window.location.hash = href;
            });
        }
        return false;
    });

    // textarea background
    $("#message-box").css("background-color", "#F5F5F5");
    //Pass event keyup
    $("#message-box").on("keyup", function() {
        //console.log("Keyup happend");
        //Get the number of characters the user types
        var charCount = $("#message-box").val().length;
        console.log(charCount);
        if (charCount > 5) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "green");
        };
        $("#char-count").html(charCount);
    });
    //Tooltips
    $(function() {
        $('#item1').tooltip();
    });
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //Adding event listener to user input in text area 
    //Selecting the submit button
    //The on method takes two arguments: and event and a handler
    $("#btnSubmit").on("click", function() {
        var comment = $("#message-box").val();
        console.log(comment);
        if (comment === "") {
            console.log("The text-area is empty");
            $("#message-box").css("border-color", "red");
        } else {
            $("#visible-comment").html(comment);
            $("#message-box").hide();
        };

        //No backend so the content will disappear when submitted.
        return false;
    });

    //Work section
    //console.log(works.toString());
    for (var i = 0; i < works.length; ++i) {
        $("#work").append("\
        <div class='col-sm-6 col-md-4'>\
        <a href='https://saffron-petition.herokuapp.com/register' class='work-img'>\
          <img class='work-img' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'>Title:</p>Work title</span>\
          </a>\
        </div>\
        ");
        var images = $("#work img");
        //console.log(images);
        if (i % 2 === 0) {
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon");
        };
    };

    $(".work-img").mouseenter(function() {
        //console.log(this);
        $(".info", this).show();
    }).mouseleave(function() {
        $(".info", this).hide();
    });
});