$(window).ready(function() {
$('.background').fadeIn(1000); /*fadeIn rate in milliseconds. A higher number = slower fadeIn*/
});
$(document).ready(function() {
	$(".links").on("mouseenter", function() {
    $(this).addClass("highlight");
  }).on("mouseleave", function() {
    $(this).removeClass("highlight");
  });
});