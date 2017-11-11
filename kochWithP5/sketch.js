var x = 0;
var y = 0;
var direction = 0; // degrees 0 - 360
var penUpDown = true;

function setup(){
	// initialize
	createCanvas(400, 400); 
	// user
	penUpDown = true;
	x = 0;
	y = 200;
	background(250);
	direction = 0;
	stroke(0, 0, 255); // stroke('blue');
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