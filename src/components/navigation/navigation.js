$(function() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});