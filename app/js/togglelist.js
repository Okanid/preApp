function toggle() {
        $('.togglelist li').toggle(300);

var link;

$('.togglelist').on('click', 'li', function (event) {
	link = $(this).parent().attr('.');
	console.log(link);
});
};
