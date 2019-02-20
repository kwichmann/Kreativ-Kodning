let musik;

function preload() {
	musik = loadSound('circle.mp3');
}

function setup() {
  createCanvas(400, 400);
  musik.play();
}

function mousePressed() {
  if (musik.isPlaying()) {
  	musik.pause();
  } else {
  	musik.play();
  }	
}

function draw() {
  background(220);
}
