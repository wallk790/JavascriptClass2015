var allBox = document.querySelector('.box');
console.log(allBox);

var blackBox = document.querySelector('.box-1');

var redBox = document.querySelector('.box-2');

var greenBox = document.querySelector('.box-3');

var blueBox = document.querySelector('.box-4');

var para = document.querySelector('.para-1');
var para2 = para.innerHTML; 

var myRandomWords = ['Enayet', 'LOVES', 'Bananas', 'Barf'];



blackBox.addEventListener('click', function (evt){
	para.style.backgroundColor = "#0000ff" ;
	para.style.color = "#000000" ;

	para.classList.add('para-1')
	para.classList.remove('para-3')
	para.classList.remove('para-4')
	para.classList.remove('para-2')
	para.innerHTML= getNewWord();

});

redBox.addEventListener('click', function (evt){
	para.style.backgroundColor = "#00ff00" ;
	para.style.color = "#ff0000" ;

	para.classList.add('para-2')
	para.classList.remove('para-1')
	para.classList.remove('para-3')
	para.classList.remove('para-4')

	para.innerHTML= para2;

});

greenBox.addEventListener('click', function (evt){
	para.style.backgroundColor = "#0000ff" ;
	para.style.color = "#00ff00" ;

	para.classList.add('para-3')
	para.classList.remove('para-1')
	para.classList.remove('para-4')
	para.classList.remove('para-2')

	para.innerHtML= randomWord;
});

blueBox.addEventListener('click', function (evt){
	para.style.backgroundColor = "#ff00ff" ;
	para.style.color = "#0000ff" ;

	para.classList.add('para-4')
	para.classList.remove('para-1')
	para.classList.remove('para-3')
	para.classList.remove('para-2')
});

function getNewWord(){
	var randomNumber = Math.floor(Math.random() * myRandomWords.length);
	var randomWord = myRandomWords[randomNumber];
	return randomWord;
}

