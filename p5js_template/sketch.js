var x = 0;
var y = 0;
var direction = 0; // degrees 0 - 360
var penUpDown = true;

function setup(){
	// initialize
	createCanvas(400, 400); 
	// user
}

function draw() {
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