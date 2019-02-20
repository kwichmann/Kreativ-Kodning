let musik;
let glider;

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
  
  glider = createSlider(0, 1, 0.5, 0.01);
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
  musik.setVolume(glider.value());
}
