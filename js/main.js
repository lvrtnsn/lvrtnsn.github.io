$(function () {
	$('header a').on('click', function() {
		$('header a').removeClass('selected');
		$(this).addClass('selected')
	})
})