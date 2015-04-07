var rockButton = $('.choice-rock'); //dollar sign says using jQuery, in commas says what element using what class you're referrering to 
var paperButton = $('.choice-paper');
var scissorsButton = $('.choice-scissors');

var playerChoice = '';
var computerChoice = ''; 

var playerChoiceElement = $('.player-choice');
var computerChoiceElement = $('.computer-choice');

var winningElement = $('results-final');

//score
var playerScore = 0;
var computerScore = 0;
var playerScoreElement = $(playerScore)
var computerScoreElement = $(computerScore)

rockButton.on('click', function (){ //takes two parameters, listening for you to click on button and when you click run a function
	winningElement.text('I picked rock.')
	playerChoice = 'rock';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);

}); 

paperButton.on('click', function (){ //these are called event listeners 
	winningElement.text('I picked paper.')
	playerChoice = 'paper';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);

}); 

scissorsButton.on('click', function (){ //you can write functions to include in these 
	winningElement.text('I picked scissors.')
	playerChoice = 'scissors';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);

}); 

function makeComputerChoice(){
	var randomNumber = Math.random();

	if (randomNumber <= 0.333) {
		computerChoice = 'rock';
	} else if (randomNumber > 0.333 && randomNumber < 0.666) {
		computerChoice = 'paper';
	} else if (randomNumber >= 0.666) {
		computerChoice = 'scissors';
	}

	winningElement.text(randomNumber + ':' + computerChoice);
}

function findWinner(){

	if (playerChoice === computerChoice) {//three equal signs compares the values and the types 
		winningElement.text('tie');
	}

	if (playerChoice === 'rock') {
		if (computerChoice === 'paper') {
			winningElement.text('computer wins')
			computerScore += 1;
		}
	}

	if (playerChoice === 'rock') {
		if (computerChoice === 'scissors') {
			winningElement.text('player wins')
			playerScore += 1;
		}
	}

	if (playerChoice === 'paper') {
		if (computerChoice === 'scissors') {
			winningElement.text('player wins')
			playerScore += 1;
		}
	}

	if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			winningElement.text('computer wins')
			computerScore += 1;
		}
	}


	if (playerChoice === 'scissors') {
		if (computerChoice === 'rock') {
			winningElement.text('computer wins')
			computerScore += 1;
		}
	}

	if (playerChoice === 'scissors') {
		if (computerChoice === 'paper') {
			winningElement.text('player wins')
			playerScore += 1;
		}
	}

	playerScoreElement.text(playerScore);
	computerScoreElement.text(computerScore);

	console.log(playerScore + ':' + computerScore);

}