var allBoxes = document.querySelectorAll('.box');
console.log(allBoxes); // this is like a Serial.print

var blackBox = document.querySelector('.box-1');
var redBox = document.querySelector('.box-2');
var greenBox = document.querySelector('.box-3');
var blueBox = document.querySelector('.box-4');
var textBox = document.querySelector('.textbox')

var textBoxChange= textBox.innerHTML;

var myRandomWords = ['Peace','Love','Random','TURNT','WHY','Kinfolk','Weeeee'];
// var randomNumber = Math.floor( Math.random() *myRandomWords.length );
// var randomWord = myRandomWords[randomNumber];
// console.log(randomWord);

blackBox.addEventListener('click', function (event) {
	// document.body.style.backgroundColor = '#000000'
	textBox.classList.add('textBox-1'); //didnt put a dot cuz we already know its a class - in classlist
	textBox.classList.remove('textBox-2');
	textBox.classList.remove('textBox-3');
	textBox.classList.remove('textBox-4');

	textBox.innerHTML = getNewWord();
});

redBox.addEventListener('click', function (event1) {
	// document.body.style.backgroundColor = '#ff0000'
	textBox.classList.add('textBox-2');
	textBox.classList.remove('textBox-1');
	textBox.classList.remove('textBox-3');
	textBox.classList.remove('textBox-4');

	textBox.innerHTML = getNewWord();
});

greenBox.addEventListener('click', function (event2) {
	// document.body.style.backgroundColor = '#000ff0'
	textBox.classList.add('textBox-3')
	textBox.classList.remove('textBox-1')
	textBox.classList.remove('textBox-2')
	textBox.classList.remove('textBox-4')
});

blueBox.addEventListener('click', function (event3) {
	// document.body.style.backgroundColor = '#0234ff'
	textBox.classList.add('textBox-4')
	textBox.classList.remove('textBox-1')
	textBox.classList.remove('textBox-3')
	textBox.classList.remove('textBox-2')
});

function getNewWord() {
	var randomNumber = Math.floor( Math.random() *myRandomWords.length );
	var randomWord = myRandomWords[randomNumber];
	return randomWord;
}