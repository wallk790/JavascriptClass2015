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
var $button10 = $('.button-10');
var $button11 = $('.button-11');
var $text1 = $('.text1');
var $text2 = $('.text2');
var $text3 = $('.text3');
var $text4 = $('.text4');
var $text5 = $('.text5');
var $text6 = $('.text6');
var $text7 = $('.text7');
var $text8 = $('.text8');
var $text9 = $('.text9');


//player button options 
var buttonOption = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9' , 'button10', 'button11'];
var playerOption = '';
var player2Option = '';

var player1Turn; 

//var computerChoice = ''; 

function init() {

    buttonEvents();
    buttonEvents2;

}

function buttonEvents() {

    $(".button").on('click', function(){
        player1Turn=!player1Turn;
        console.log("whose turn:" +player1Turn);
    })
	
	$button1.on('click', function() {

	playerOption = buttonOption[0];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        if  (player1Turn = true) {
            $text1.text('X');
        }
        //console.log (computerChoice);
	});

	$button2.on('click', function() {
	playerOption = buttonOption[1];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        if  (player1Turn = true) {
            $text2.text('X');
        }
        //console.log (computerChoice);
	});

	$button3.on('click', function() {
	playerOption = buttonOption[2];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text3.text('X');
        //console.log (computerChoice);
	});

	$button4.on('click', function() {
	playerOption = buttonOption[3];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text4.text('X');
        //console.log (computerChoice);
	});

	$button5.on('click', function() {
	playerOption = buttonOption[4];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text5.text('X');
        //console.log (computerChoice);
	});

	$button6.on('click', function() {
	playerOption = buttonOption[5];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text6.text('X');
        //console.log (computerChoice);
	});

	$button7.on('click', function() {
	playerOption = buttonOption[6];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text7.text('X');
        //console.log (computerChoice);
	});

	$button8.on('click', function() {
	playerOption = buttonOption[7];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text8.text('X');
        //console.log (computerChoice);
	});

	$button9.on('click', function() {
	playerOption = buttonOption[8];
    //computerChoice = makeComputerChoice();
        console.log (playerOption);
        $text9.text('X');
        //console.log (computerChoice);

	});

}

function buttonEvents2() {
    
    $button1.on('click', function() {
    player2Option = buttonOption[0];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        $text1.text('O');
        //console.log (computerChoice);
    });

    $button2.on('click', function() {
                if  (player1Turn = false) {
    player2Option = buttonOption[1];
}
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button3.on('click', function() {
    player2Option = buttonOption[2];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button4.on('click', function() {
    player2Option = buttonOption[3];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button5.on('click', function() {
    player2Option = buttonOption[4];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button6.on('click', function() {
    player2Option = buttonOption[5];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button7.on('click', function() {
    player2Option = buttonOption[6];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button8.on('click', function() {
    player2Option = buttonOption[7];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);
    });

    $button9.on('click', function() {
    player2Option = buttonOption[8];
    //computerChoice = makeComputerChoice();
        console.log (player2Option);
        //console.log (computerChoice);

    });

}

init(); 
//function makeComputerChoice() {
  //var randomNum = Math.floor(Math.random() * buttonOption.length);
  //return buttonOption[randomNum];
//}
