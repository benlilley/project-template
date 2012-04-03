// Javascript that needs to run when the page is ready goes here.
$(document).ready(function() {
	
	// Li Classes
	// Adds a class to first and last list items globally so we can target them with CSS, because IE7 sucks. Also add a class of even
	// to well, the even rows of a list so we can give separate margins, styles or floats.
	$("li:first-child").addClass("first");
	$("li:last-child").addClass("last");
	
	// Smooth Anchor
	// Add a class of scroll to any anchor link and this will smoothly scroll to the location. 
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

});

// Functions and plugins can go below here.