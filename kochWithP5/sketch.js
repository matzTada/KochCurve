var x = 0;
var y = 0;
var direction = 0; // degrees 0 - 360
var penUpDown = true;

var STEP_VALUE = 1;

function setup(){
	// initialize
	createCanvas(400, 400); 
	// user
	stroke(255, 0, 0); // stroke('red');
	pen = true;
	x = 0;
	y = 200;
	direction = 0;
	background(250);
	koch(100, 6);
}

function draw() {
}

function koch(length, n){
	if(n > 1){
		koch(length / 3, n - 1);
		turn(60);
		koch(length / 3, n - 1);
		turn(-120);
		koch(length / 3, n - 1);
		turn(60);
		koch(length / 3, n - 1);
	}else{
		move(length);
	}
}

function move(step) {
	for(var i = 0; i < step; i++){
		x += cos(radians(direction)) * STEP_VALUE;
		y += sin(radians(direction)) * STEP_VALUE;
		if(penUpDown == true){
			point(x, y);
		}
	}
}

function turn(angle){
	direction += angle;
}