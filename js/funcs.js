$(document).ready(function() {
	//rel links
	$('.main-content a[rel=external]').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).addClass('ext');

	//responsive tables
	$("table").wrap("<div class='table-scroll'></div>");

});
