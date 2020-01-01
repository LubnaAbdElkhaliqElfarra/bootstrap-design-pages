/* gloabal $ ,jQuery ,alert */

$(document).ready(function () {

    // Nice Scroll 
    $("html").niceScroll({
        cursorcolor:"#E41B17",
        cursorwidth:"15px",
        background:"rgba(20,20,20,0.2)",
        cursorborder:"1px solid #E41B17",
        cursorborderradius:0
      });
      $("#boxscroll").niceScroll({horizrailenabled:false});// End Nice Scroll

    $('.carousel').carousel({
        interval: 6000
    });
   

    // Show color box
    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();
    });

    //Change color theme
    var colorLi = $('.color-option ul li');

    colorLi
        .eq(0).css('backgroundColor', '#E41B17').end()
        .eq(1).css('backgroundColor', '#E426D5').end()
        .eq(2).css('backgroundColor', '#009AFF').end()
        .eq(3).css('backgroundColor', '#FFD500');

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    //  Cashing the Scrol Top Element

    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Botton To Scroll Top 
    scrollButton.click(function () {
        $("html ,body").animate({ scrollTop: 0 }, 600);

    });
});


// Loading screen
$(window).load(function () {
    // Loading Element
    $(".loading-overlay .spinner").fadeOut(000, function () {

        // Show Scroll
        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(000, function () {
            $(this).remove();
        });
    });
});

