let musik;

function preload() {
	musik = loadSound('circle.mp3');
}

function setup() {
  createCanvas(400, 400);
  musik.play();
  const knap = createButton('Pause');
  knap.mousePressed(pause);
}

function pause() {
  if (musik.isPlaying()) {
  	musik.pause();
  } else {
  	musik.play();
  }	
}

function draw() {
  background(220);
}
