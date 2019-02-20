let musik;

function preload() {
	musik = loadSound('circle.mp3');
}

function setup() {
  createCanvas(400, 400);
  musik.play();
  const knap = createButton('Pause');
  knap.mousePressed(pause);
  const knap2 = createButton('Omkvæd');
  knap2.mousePressed(omkvaed);
  
  musik.setVolume(0.6);
}

function pause() {
  if (musik.isPlaying()) {
  	musik.pause();
  } else {
  	musik.play();
  }	
}

function omkvaed() {
	musik.jump(40);
}

function draw() {
  background(220);
}
