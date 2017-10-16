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
