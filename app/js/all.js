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
    //stars
    $('.hover_stars1').css('display', 'block');
    //comment
    $('.hover_comment1').css('display', 'block');
    //post_show_more1 more shadow
    $('.post_show_more1').css({
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
    }),
    $('.post1').css({
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
    }),
    $('.post1').css('filter', 'blur(2px)'),
    $('.post1').css('backgroundImage', 'url(img/post1.png)');
    $('.post_price_1').fadeOut(100, function() {
        $('.post_price_1').css('display', 'none');
        $('.post_show_more1').css('display', 'block');
        //show more hover
        $('.post_show_more1').mouseover(function() {
            //stars
            $('.hover_stars1').css('display', 'block');
            //comment
            $('.hover_comment1').css('display', 'block');

            $('.post_show_more1').css('display', 'block');
            $('.post_price_1').css('display', 'none');
            $('.post1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post1').css('filter', 'blur(2px)'),
            $('.post1').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //stars hover

        $('.hover_stars1').mouseover(function() {

            //stars

            $('.star_hover1').mouseover(function () {
                $('.star_hover1').css('font-size', '1.8rem');
                $('.star_hover2').css('font-size', '1.125rem');
            });
            $('.star_hover1').mouseout(function () {
                $('.star_hover1').css('font-size', '1.125rem');
            });
            $('.star_hover2').mouseover(function () {
                $('.star_hover2').css('font-size', '1.8rem');
                $('.star_hover1').css('font-size', '1.125rem');
            });
            $('.star_hover2').mouseout(function () {
                $('.star_hover2').css('font-size', '1.125rem');
            });
            $('.star_hover3').mouseover(function () {
                $('.star_hover3').css('font-size', '1.8rem');
                $('.star_hover2').css('font-size', '1.125rem');
            });
            $('.star_hover3').mouseout(function () {
                $('.star_hover3').css('font-size', '1.125rem');
            });
            $('.star_hover4').mouseover(function () {
                $('.star_hover4').css('font-size', '1.8rem');
                $('.star_hover3').css('font-size', '1.125rem');
            });
            $('.star_hover4').mouseout(function () {
                $('.star_hover4').css('font-size', '1.125rem');
            });
            $('.star_hover5').mouseover(function () {
                $('.star_hover5').css('font-size', '1.8rem');
                $('.star_hover4').css('font-size', '1.125rem');
            });
            $('.star_hover5').mouseout(function () {
                $('.star_hover5').css('font-size', '1.125rem');
            });

            $('.hover_stars1').css('display', 'block');
            //comment
            $('.hover_comment1').css('display', 'block');
            $('.hover_comment1').mouseover(function () {
                $('.hover_comment1').css('font-size', '2rem');
            });
            $('.hover_comment1').mouseout(function () {
                $('.hover_comment1').css('font-size', '1.5rem');
            });

            $('.post_show_more1').css('display', 'block');
            $('.post_price_1').css('display', 'none');
            $('.post1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post1').css('filter', 'blur(2px)'),
            $('.post1').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //comment hover
        $('.hover_comment1').mouseover(function() {
            //stars
            $('.hover_stars1').css('display', 'block');
            //comment
            $('.hover_comment1').css('display', 'block');

            $('.post_show_more1').css('display', 'block');
            $('.post_price_1').css('display', 'none');
            $('.post1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post1').css('filter', 'blur(2px)'),
            $('.post1').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more1').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });

        return;
    });
    //убираем курсор
    $('.post1').mouseout(function() {
        $('.post_show_more1').css('display', 'none');
        $('.post_price_1').css('display', 'block');
        $('.post1').css(
            {'box-shadow': 'none'}
        );
        $('.post1').css('filter', 'blur(0px)');
        //stars
        $('.hover_stars1').css('display', 'none');
        //comment
        $('.hover_comment1').css('display', 'none');

        return;
    });
    return;
});


// post hover2
$('.post2').mouseover(function() {
    //stars
    $('.hover_stars2').css('display', 'block');
    //comment
    $('.hover_comment2').css('display', 'block');
    //post_show_more2 more shadow
    $('.post_show_more2').css({
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
    }),
    $('.post2').css({
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
    }),
    $('.post2').css('filter', 'blur(2px)'),
    $('.post2').css('backgroundImage', 'url(img/post2.png)');
    $('.post_price_2').fadeOut(100, function() {
        $('.post_price_2').css('display', 'none');
        $('.post_show_more2').css('display', 'block');
        //show more hover
        $('.post_show_more2').mouseover(function() {
            //stars
            $('.hover_stars2').css('display', 'block');
            //comment
            $('.hover_comment2').css('display', 'block');

            $('.post_show_more2').css('display', 'block');
            $('.post_price_2').css('display', 'none');
            $('.post2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post2').css('filter', 'blur(2px)'),
            $('.post2').css('backgroundImage', 'url(img/post2.png)'),
            $('.post_show_more2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //stars hover

        $('.hover_stars2').mouseover(function() {

            //stars

            $('.star_hover21').mouseover(function () {
                $('.star_hover21').css('font-size', '1.8rem');
                $('.star_hover22').css('font-size', '1.125rem');
            });
            $('.star_hover21').mouseout(function () {
                $('.star_hover21').css('font-size', '1.125rem');
            });
            $('.star_hover22').mouseover(function () {
                $('.star_hover22').css('font-size', '1.8rem');
                $('.star_hover21').css('font-size', '1.125rem');
            });
            $('.star_hover22').mouseout(function () {
                $('.star_hover22').css('font-size', '1.125rem');
            });
            $('.star_hover23').mouseover(function () {
                $('.star_hover23').css('font-size', '1.8rem');
                $('.star_hover22').css('font-size', '1.125rem');
            });
            $('.star_hover23').mouseout(function () {
                $('.star_hover23').css('font-size', '1.125rem');
            });
            $('.star_hover24').mouseover(function () {
                $('.star_hover24').css('font-size', '1.8rem');
                $('.star_hover23').css('font-size', '1.125rem');
            });
            $('.star_hover24').mouseout(function () {
                $('.star_hover24').css('font-size', '1.125rem');
            });
            $('.star_hover25').mouseover(function () {
                $('.star_hover25').css('font-size', '1.8rem');
                $('.star_hover24').css('font-size', '1.125rem');
            });
            $('.star_hover25').mouseout(function () {
                $('.star_hover25').css('font-size', '1.125rem');
            });
            
            $('.hover_stars2').css('display', 'block');
            //comment
            $('.hover_comment2').css('display', 'block');
            $('.hover_comment2').mouseover(function () {
                $('.hover_comment2').css('font-size', '2rem');
            });
            $('.hover_comment2').mouseout(function () {
                $('.hover_comment2').css('font-size', '1.5rem');
            });

            $('.post_show_more2').css('display', 'block');
            $('.post_price_2').css('display', 'none');
            $('.post2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post2').css('filter', 'blur(2px)'),
            $('.post2').css('backgroundImage', 'url(img/post2.png)'),
            $('.post_show_more2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //comment hover
        $('.hover_comment2').mouseover(function() {
            //stars
            $('.hover_stars2').css('display', 'block');
            //comment
            $('.hover_comment2').css('display', 'block');

            $('.post_show_more2').css('display', 'block');
            $('.post_price_2').css('display', 'none');
            $('.post2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post2').css('filter', 'blur(2px)'),
            $('.post2').css('backgroundImage', 'url(img/post2.png)'),
            $('.post_show_more2').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });

        return;
    });
    //убираем курсор
    $('.post2').mouseout(function() {
        $('.post_show_more2').css('display', 'none');
        $('.post_price_2').css('display', 'block');
        $('.post2').css(
            {'box-shadow': 'none'}
        );
        $('.post2').css('filter', 'blur(0px)');
        //stars
        $('.hover_stars2').css('display', 'none');
        //comment
        $('.hover_comment2').css('display', 'none');

        return;
    });
    return;
});




// post hover3
$('.post3').mouseover(function() {
    //stars
    $('.hover_stars3').css('display', 'block');
    //comment
    $('.hover_comment3').css('display', 'block');
    //post_show_more1 more shadow
    $('.post_show_more3').css({
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
    }),
    $('.post3').css({
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
    }),
    $('.post3').css('filter', 'blur(2px)'),
    $('.post3').css('backgroundImage', 'url(img/post1.png)');
    $('.post_price_3').fadeOut(100, function() {
        $('.post_price_3').css('display', 'none');
        $('.post_show_more3').css('display', 'block');
        //show more hover
        $('.post_show_more3').mouseover(function() {
            //stars
            $('.hover_stars3').css('display', 'block');
            //comment
            $('.hover_comment3').css('display', 'block');

            $('.post_show_more3').css('display', 'block');
            $('.post_price_3').css('display', 'none');
            $('.post3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post3').css('filter', 'blur(2px)'),
            $('.post3').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //stars hover

        $('.hover_stars3').mouseover(function() {

            //stars

            $('.star_hover31').mouseover(function () {
                $('.star_hover31').css('font-size', '1.8rem');
                $('.star_hover32').css('font-size', '1.125rem');
            });
            $('.star_hover31').mouseout(function () {
                $('.star_hover31').css('font-size', '1.125rem');
            });
            $('.star_hover32').mouseover(function () {
                $('.star_hover32').css('font-size', '1.8rem');
                $('.star_hover31').css('font-size', '1.125rem');
            });
            $('.star_hover32').mouseout(function () {
                $('.star_hover32').css('font-size', '1.125rem');
            });
            $('.star_hover33').mouseover(function () {
                $('.star_hover33').css('font-size', '1.8rem');
                $('.star_hover32').css('font-size', '1.125rem');
            });
            $('.star_hover33').mouseout(function () {
                $('.star_hover33').css('font-size', '1.125rem');
            });
            $('.star_hover34').mouseover(function () {
                $('.star_hover34').css('font-size', '1.8rem');
                $('.star_hover33').css('font-size', '1.125rem');
            });
            $('.star_hover34').mouseout(function () {
                $('.star_hover34').css('font-size', '1.125rem');
            });
            $('.star_hover35').mouseover(function () {
                $('.star_hover35').css('font-size', '1.8rem');
                $('.star_hover34').css('font-size', '1.125rem');
            });
            $('.star_hover35').mouseout(function () {
                $('.star_hover35').css('font-size', '1.125rem');
            });

            $('.hover_stars3').css('display', 'block');
            //comment
            $('.hover_comment3').css('display', 'block');
            $('.hover_comment3').mouseover(function () {
                $('.hover_comment3').css('font-size', '2rem');
            });
            $('.hover_comment3').mouseout(function () {
                $('.hover_comment3').css('font-size', '1.5rem');
            });

            $('.post_show_more3').css('display', 'block');
            $('.post_price_3').css('display', 'none');
            $('.post3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post3').css('filter', 'blur(2px)'),
            $('.post3').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //comment hover
        $('.hover_comment3').mouseover(function() {
            //stars
            $('.hover_stars3').css('display', 'block');
            //comment
            $('.hover_comment3').css('display', 'block');

            $('.post_show_more3').css('display', 'block');
            $('.post_price_3').css('display', 'none');
            $('.post3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post3').css('filter', 'blur(2px)'),
            $('.post3').css('backgroundImage', 'url(img/post1.png)'),
            $('.post_show_more3').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });

        return;
    });
    //убираем курсор
    $('.post3').mouseout(function() {
        $('.post_show_more3').css('display', 'none');
        $('.post_price_3').css('display', 'block');
        $('.post3').css(
            {'box-shadow': 'none'}
        );
        $('.post3').css('filter', 'blur(0px)');
        //stars
        $('.hover_stars3').css('display', 'none');
        //comment
        $('.hover_comment3').css('display', 'none');

        return;
    });
    return;
});



// post hover 4
$('.post4').mouseover(function() {
    //stars
    $('.hover_stars4').css('display', 'block');
    //comment
    $('.hover_comment4').css('display', 'block');
    //post_show_more1 more shadow
    $('.post_show_more4').css({
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
    }),
    $('.post4').css({
        '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
        'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
    }),
    $('.post4').css('filter', 'blur(2px)'),
    $('.post4').css('backgroundImage', 'url(img/post4.png)');
    $('.post_price_4').fadeOut(100, function() {
        $('.post_price_4').css('display', 'none');
        $('.post_show_more4').css('display', 'block');
        //show more hover
        $('.post_show_more4').mouseover(function() {
            //stars
            $('.hover_stars4').css('display', 'block');
            //comment
            $('.hover_comment4').css('display', 'block');

            $('.post_show_more4').css('display', 'block');
            $('.post_price_4').css('display', 'none');
            $('.post4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post4').css('filter', 'blur(2px)'),
            $('.post4').css('backgroundImage', 'url(img/post4.png)'),
            $('.post_show_more4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //stars hover

        $('.hover_stars4').mouseover(function() {

            //stars

            $('.star_hover41').mouseover(function () {
                $('.star_hover41').css('font-size', '1.8rem');
                $('.star_hover42').css('font-size', '1.125rem');
            });
            $('.star_hover41').mouseout(function () {
                $('.star_hover41').css('font-size', '1.125rem');
            });
            $('.star_hover42').mouseover(function () {
                $('.star_hover42').css('font-size', '1.8rem');
                $('.star_hover41').css('font-size', '1.125rem');
            });
            $('.star_hover42').mouseout(function () {
                $('.star_hover42').css('font-size', '1.125rem');
            });
            $('.star_hover43').mouseover(function () {
                $('.star_hover43').css('font-size', '1.8rem');
                $('.star_hover42').css('font-size', '1.125rem');
            });
            $('.star_hover43').mouseout(function () {
                $('.star_hover43').css('font-size', '1.125rem');
            });
            $('.star_hover44').mouseover(function () {
                $('.star_hover44').css('font-size', '1.8rem');
                $('.star_hover43').css('font-size', '1.125rem');
            });
            $('.star_hover44').mouseout(function () {
                $('.star_hover44').css('font-size', '1.125rem');
            });
            $('.star_hover45').mouseover(function () {
                $('.star_hover45').css('font-size', '1.8rem');
                $('.star_hover44').css('font-size', '1.125rem');
            });
            $('.star_hover45').mouseout(function () {
                $('.star_hover45').css('font-size', '1.125rem');
            });

            $('.hover_stars4').css('display', 'block');
            //comment
            $('.hover_comment4').css('display', 'block');
            $('.hover_comment4').mouseover(function () {
                $('.hover_comment4').css('font-size', '2rem');
            });
            $('.hover_comment4').mouseout(function () {
                $('.hover_comment4').css('font-size', '1.5rem');
            });

            $('.post_show_more4').css('display', 'block');
            $('.post_price_4').css('display', 'none');
            $('.post4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post4').css('filter', 'blur(2px)'),
            $('.post4').css('backgroundImage', 'url(img/post4.png)'),
            $('.post_show_more4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });
        //comment hover
        $('.hover_comment4').mouseover(function() {
            //stars
            $('.hover_stars4').css('display', 'block');
            //comment
            $('.hover_comment4').css('display', 'block');

            $('.post_show_more4').css('display', 'block');
            $('.post_price_4').css('display', 'none');
            $('.post4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,0.7)',
            }),
            $('.post4').css('filter', 'blur(2px)'),
            $('.post4').css('backgroundImage', 'url(img/post4.png)'),
            $('.post_show_more4').css({
                'box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-moz-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
                '-webkit-box-shadow': 'inset 0px 0px 0px 195px rgba(214,145,214,2)',
            });
            return;
        });

        return;
    });
    //убираем курсор
    $('.post4').mouseout(function() {
        $('.post_show_more4').css('display', 'none');
        $('.post_price_4').css('display', 'block');
        $('.post4').css(
            {'box-shadow': 'none'}
        );
        $('.post4').css('filter', 'blur(0px)');
        //stars
        $('.hover_stars4').css('display', 'none');
        //comment
        $('.hover_comment4').css('display', 'none');

        return;
    });
    return;
});
