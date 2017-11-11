var x = 0;
var y = 0;
var direction = 0; // degrees 0 - 360
var penUpDown = true;

var STEP_VALUE = 1;

function setup(){
	// initialize
	createCanvas(400, 400); 
	// user
	stroke(0, 0, 255); // stroke('blue');
	pen = true;
	x = 0;
	y = 200;
	direction = 0;
	background(250);
	koch(400, 5);
}

function draw() {
}

function koch(length, n){
	if(n > 1){
		koch(length / 3, n - 1);
		turn(-60);
		koch(length / 3, n - 1);
		turn(120);
		koch(length / 3, n - 1);
		turn(-60);
		koch(length / 3, n - 1);
	}else{
		move(length);
	}
}

function move(step) {
	var dx = cos(radians(direction)) * step;
	var dy = sin(radians(direction)) * step;
	if(penUpDown == true){
		line(x, y, x + dx, y + dy);
	}
	x += dx;
	y += dy;
}

function turn(angle){
	direction += angle;
}