$(document).ready( function(){

    //Hero image 
    $(window).scroll(function () {
        // Store the distance scrolled
        var scrolled = $(window).scrollTop() + 1;
    
        // Set the scroll speed
        var scrollSpeed = 0.3;
        
        // Update the background position
        $(".hero-unit").css('background-position', '0' + -(scrolled * scrollSpeed) + 'px');
    });

    $(window).bind('scroll', update);


    //Move to portfolio on click - from Hero Image
    $('#portfolio-button').click (function(){
        $('html, body').animate({
            scrollTop: $('#portfolio-section').offset().top
        }, 1500);
    });

    

   
});