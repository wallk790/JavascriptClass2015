//connecting to buttons 
var $button1 = $('.button-1');
var $button2 = $('.button-2');
var $button3 = $('.button-3');
var $button4 = $('.button-4');
var $button5 = $('.button-5');
var $button6 = $('.button-6');
var $button7 = $('.button-7');
var $button8 = $('.button-8');
var $button9 = $('.button-9');

//player button options 
var buttonOption = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];
var playerOption = '';
var computerChoice = ''; 


function buttonEvents(){
	
	$button1.on('click', function() {
	playerOption = buttonOption[0];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button2.on('click', function() {
	playerOption = buttonOption[1];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button3.on('click', function() {
	playerOption = buttonOption[2];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button4.on('click', function() {
	playerOption = buttonOption[3];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button5.on('click', function() {
	playerOption = buttonOption[4];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button6.on('click', function() {
	playerOption = buttonOption[5];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button7.on('click', function() {
	playerOption = buttonOption[6];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button8.on('click', function() {
	playerOption = buttonOption[7];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);
	});

	$button9.on('click', function() {
	playerOption = buttonOption[8];
    computerChoice = makeComputerChoice();
        console.log (playerOption);
        console.log (computerChoice);

	});

}

function makeComputerChoice() {
  var randomNum = Math.floor(Math.random() * choiceList.length);
  return buttonOption[randomNum];
}