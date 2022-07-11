$('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

var offset = $('nav').offset().top;
$(window).scroll(function () {
    if ($(this).scrollTop() >= offset) {
        $('navbar').addClass('isFixed');
        $('html').addClass('whiteSpace');
    } else {
        $('navbar').removeClass('isFixed');
        $('html').removeClass('whiteSpace');
    } 
});