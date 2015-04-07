var posX = 250;
var posY = 250;

var velX = 5; 
var velY = 5

var ball = $('.ball');

function update(){

	posX += velX;
	posY += velY;

	ball.css('left', posX);
	ball.css('top', posY);

	console.log('update');

	requestAnimationFrame(update);//built in java script thing keeps running function 

};

function checkBoundaries(){

if (posX > $(window).width())
	velX *= -1;
	posX = $(window).width();
}

if (posX < 0) {
	velx = -velX;
	posX =0;
}

if (posY > $(window).height())
	velY *= -1;
	posY = $(window).height();
}

if (posY < 0) {
	velY = -velY;
	posY =0;
}

}

update();

