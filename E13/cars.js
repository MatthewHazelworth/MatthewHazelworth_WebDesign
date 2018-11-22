$(document).ready(function() {
    // run function on initial page load
    carGuess();
});
 
function carGuess() {
    var carArray = ["lamborghini","corvette","mustang","camaro","viper","chevelle","fenyr","bmwI8","audi","veyron", "ferrari", "chitty chitty bang bang", "charger", "super bee", "aston martin"];
    var car = Math.floor(Math.random() * carArray.length);
    var stripped = carArray[car].toLowerCase();
    console.log(carArray[car]);
    console.log(stripped);
    //$('body').css('background-image', carArray[car]);
	if (car == 0)
	{
		$('.picBox').addClass('lamborghini');
	}
	else if(car == 1)
	{
		$('.picBox').addClass('corvette');
	}
	else if (car == 2)
	{
		$('.picBox').addClass('mustang');
	}
	else if(car == 3)
	{
		$('.picBox').addClass('camaro');
	}
	else if(car == 4)
	{
		$('.picBox').addClass('viper');
	}
	else if(car == 5)
	{
		$('.picBox').addClass('chevelle');
	}
	else if(car == 6)
	{
		$('.picBox').addClass('fenyr');
	}
	else if(car == 7)
	{
		$('.picBox').addClass('bmwI8');
	}
	else if(car == 8)
	{
		$('.picBox').addClass('audi');
	}
	else if(car == 9)
	{
		$('.picBox').addClass('veyron');
	}
	else if(car == 10)
	{
		$('.picBox').addClass('ferrari');
	}
	else if(car == 11)
	{
		$('.picBox').addClass('ChittyChittyBangBang');
	}
	else if(car == 12)
	{
		$('.picBox').addClass('charger');
	}
	else if(car == 13)
	{
		$('.picBox').addClass('super bee');
	}
	else if(car == 14)
	{
		$('.picBox').addClass('aston martin');
	}
    $('#submit').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if (guess == stripped || guess == carArray[car]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}