// Save our 'new word' span to a variable.
var newWord = document.querySelector('.new-word');
var background = document.querySelector('.background');

// Arrays (lists) for some words and colors
var myWords = ['dorks', 'best friends', 'super smart', 'beautiful souls', 'epic nerds', 'going to be billionaires'];
var myColors = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors0 = ['#FF6666', '#FFB280', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

// Get a random number and use it go get a random word in the array. 
var randomWordNum = Math.floor( Math.random() * myWords.length );
var randomWord = myWords[randomWordNum];

// Get a random number and use it go get a random color in the array.
var randomColorNum = Math.floor( Math.random() * myColors.length );
var randomColor = myColors[randomColorNum];

var randomColorNum0 = Math.floor( Math.random() * myColors0.length );
var randomColor0 = myColors0[randomColorNum0];

// Change the content and style of our word in the document.
newWord.innerHTML = randomWord;
newWord.style.color = randomColor;
background.style.background = randomColor0;

//Second line 

var newWord2 = document.querySelector('.new-word2');
var background2 = document.querySelector('.background2');

var myWords2 = ['really good', 'helpful for homework', 'so freaking annoying', 'epically long', 'constantly buzzing', 'best friend'];
var myColors2a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors2b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum2 = Math.floor( Math.random() * myWords2.length );
var randomWord2 = myWords2[randomWordNum2];

var randomColorNum2a = Math.floor( Math.random() * myColors2a.length );
var randomColor2a = myColors2a[randomColorNum2a];

var randomColorNum2b = Math.floor( Math.random() * myColors2b.length );
var randomColor2b = myColors2b[randomColorNum2b];

newWord2.innerHTML = randomWord2;
newWord2.style.color = randomColor2a;
background2.style.background = randomColor2b;

//Third line 

var newWord3 = document.querySelector('.new-word3');
var background3 = document.querySelector('.background3');

var myWords3 = ['inappropriate', 'weird', 'not funny'];
var myColors3a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors3b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum3 = Math.floor( Math.random() * myWords3.length );
var randomWord3 = myWords3[randomWordNum3];

var randomColorNum3a = Math.floor( Math.random() * myColors3a.length );
var randomColor3a = myColors3a[randomColorNum3a];

var randomColorNum3b = Math.floor( Math.random() * myColors3b.length );
var randomColor3b = myColors3b[randomColorNum3b];

newWord3.innerHTML = randomWord3;
newWord3.style.color = randomColor3a;
background3.style.background = randomColor3b;

//7th line 

var newWord7 = document.querySelector('.new-word7');
var background7 = document.querySelector('.background7');

var myWords7 = ['it was all Marcos idea', 'everything strange that happens in CT is Yumengs fault', 'javascript is fun when making fun of your peers'];
var myColors7a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors7b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum7 = Math.floor( Math.random() * myWords7.length );
var randomWord7 = myWords7[randomWordNum7];

var randomColorNum7a = Math.floor( Math.random() * myColors7a.length );
var randomColor7a = myColors7a[randomColorNum7a];

var randomColorNum7b = Math.floor( Math.random() * myColors7b.length );
var randomColor7b = myColors7b[randomColorNum7b];

newWord7.innerHTML = randomWord7;
newWord7.style.color = randomColor7a;
background7.style.background = randomColor7b;

//Fourth line 

var newWord4 = document.querySelector('.new-word4');
var background4 = document.querySelector('.background4');

var myWords4 = ['the best', 'so hard to teach', 'really stupid except for Yumeng', 'hilarious', 'super annoying', 'going to be billionaires'];
var myColors4a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors4b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum4 = Math.floor( Math.random() * myWords4.length );
var randomWord4 = myWords4[randomWordNum4];

var randomColorNum4a = Math.floor( Math.random() * myColors4a.length );
var randomColor4a = myColors4a[randomColorNum4a];

var randomColorNum4b = Math.floor( Math.random() * myColors4b.length );
var randomColor4b = myColors4b[randomColorNum4b];

newWord4.innerHTML = randomWord4;
newWord4.style.color = randomColor4a;
background4.style.background = randomColor4b;

//Fifth line 

var newWord5 = document.querySelector('.new-word5');
var background5 = document.querySelector('.background5');

var myWords5 = ['bizarre', 'totally weird', 'super funny', 'LOLZ', 'awesome'];
var myColors5a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors5b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum5 = Math.floor( Math.random() * myWords5.length );
var randomWord5 = myWords5[randomWordNum5];

var randomColorNum5a = Math.floor( Math.random() * myColors5a.length );
var randomColor5a = myColors3a[randomColorNum5a];

var randomColorNum5b = Math.floor( Math.random() * myColors5b.length );
var randomColor5b = myColors5b[randomColorNum3b];

newWord5.innerHTML = randomWord5;
newWord5.style.color = randomColor5a;
background5.style.background = randomColor5b;

//Sixth line 

var newWord6 = document.querySelector('.new-word6');
var background6 = document.querySelector('.background6');

var myWords6 = ['murder', 'marry', 'make out with', 'take a swim with', 'eat', 'love'];
var myColors6a = ['#FF0000', '#FF6600', '#66FF33', '#0099FF', '#9900CC'];
var myColors6b = ['#FF6666', '#FFB280', '#FFFF99', '#C2FFAD', '#B2FFE6', '#FFB2FF'];

var randomWordNum6 = Math.floor( Math.random() * myWords6.length );
var randomWord6 = myWords6[randomWordNum6];

var randomColorNum6a = Math.floor( Math.random() * myColors6a.length );
var randomColor6a = myColors6a[randomColorNum6a];

var randomColorNum6b = Math.floor( Math.random() * myColors6b.length );
var randomColor6b = myColors6b[randomColorNum6b];

newWord6.innerHTML = randomWord6;
newWord6.style.color = randomColor6a;
background6.style.background = randomColor6b;



