
/*$(document).ready(function() {
    $('#bel').height($(window).height() - 90);
}); */


$("#hedbel").click(function() {
    $('html, body').animate({
        scrollTop: $("#bel").offset().top
    }, 1000);
});


$("#heddon").click(function() {
    $('html, body').animate({
        scrollTop: $("#don").offset().top
    }, 1000);
});


$("#hedbeli").click(function() {
    $('html, body').animate({
        scrollTop: $("#carouselExampleIndicators2").offset().top
    }, 1000);
});


$('.carousel').carousel({
  interval: 1500
});