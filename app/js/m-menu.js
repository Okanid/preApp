function lala() {
    $('#my-menu').slideToggle(300);
    $('.hamburger').toggleClass('is-active');
}
$('li').click(function(event) {
    $('#my-menu').slideToggle(300);
    $('.hamburger').removeClass('is-active');
});
