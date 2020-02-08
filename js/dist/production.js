$(document).ready(function() {
	//rel links
	$('.main-content a[rel=external]').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).addClass('ext');

	// svr replace w/mondenizr
	if(!Modernizr.svg) {
		$('img[src*="svg"]').attr('src'), function () {
			return $(this).attr('src').replace('.svg', '.png');
		}
	}

	//responsive tables
	$("table").wrap("<div class='table-scroll'></div>");

});
