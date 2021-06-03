$("#pagetop a").click(function () {
	$('body,html').animate({scrollTop: 0}, 2000);
	return false;
});

$(function(){
	$('a[href^=#]').click(function(){ 
		var speed = 2000;
		var href= $(this).attr("href"); 
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});