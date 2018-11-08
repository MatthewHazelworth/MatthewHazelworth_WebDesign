$(document).ready(function() 
{
    demoFunction();
	
    $(window).resize(function() 
	{
       
    });
	
    $(window).scroll(function()
	{
 
    });
});
 
function demoFunction()
 {
    $('p').addClass('bigger');
    console.log('added bigger');
    $('p').click(function()
	{
        $('p').css('color', 'white');
        console.log('added white');
        $('body').toggleClass('bodyBG');
    });
}