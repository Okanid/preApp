// hide map button
$('.second_nav_map').click(function() {
    $('.second_nav_map').toggleClass('second_nav_map_2');
    if ($(this).val() == "hide map") {
        $(this).val("show map");
        $('.map_marker_2').css('display', 'block');
    } else {
        $(this).val("hide map");
        $('.map_marker_2').css('display', 'none');
    }
});

// post hover
$('.post1').mouseover(function() {
    $('.post1').css({
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
    }),
    $('.post1').css('filter', 'blur(2px)'),
    $('.post1').css('backgroundImage', 'url(img/post1.png)');
    $('.post_price_1').fadeOut(100, function() {
        $('.post_price_1').css('display', 'none');
        $('.post_show_more').css('display', 'block');
        $('.post_show_more').mouseover(function() {
            $('.post_show_more').css('display', 'block');
            $('.post_price_1').css('display', 'none');
            $('.post1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post1').css('filter', 'blur(2px)'),
            $('.post1').css('backgroundImage', 'url(img/post1.png)');
            return;
        });
        return;
    });
    $('.post1').mouseout(function() {
        $('.post_show_more').css('display', 'none');
        $('.post_price_1').css('display', 'block');
        $('.post1').css(
            {'box-shadow': 'none'}
        );
        $('.post1').css('filter', 'blur(0px)');
        return;
    });
    return;
});
