$(document).ready(function() {
    // run function on initial page load
    project4();
	
    // vPosH1();
 
    // run function on resize of the window
    $(window).resize(function() 
	{
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {
        $('.jqClick').addClass('redC');
    });
});
 

function project4() 
{
    $('.menu').click(function() {
        $('.hamburger').toggleClass('closed');	        
    });
	
    $('.menu').click(function() {
        $(".homeBar").toggleClass('closed');
	});
	
	$('.menu').click(function() {
        $(".dropBar").toggleClass('closed');
	});
}