//Not to wait until the document is ready
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
        $("#visible-comment").html(comment);
        $("#message-box").hide();
        //No backend so the content will disappear when submitted.
        return false;
    });
});