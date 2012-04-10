// javascript that needs to run when the page is ready goes here.
$(document).ready(function() {
	
	// smooth anchor
	// add a class of scroll to any anchor link and this will smoothly scroll to the location. 
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

});

// functions and plugins can go below here for speed, instead of separate and slow script files.