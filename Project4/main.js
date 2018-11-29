$(document).ready(function() {
    menu();
});
 
function menu()
{
	$('.mobile-nave').hover(function()
	{
		$('.menu-list').toggleClass('hide-nav')