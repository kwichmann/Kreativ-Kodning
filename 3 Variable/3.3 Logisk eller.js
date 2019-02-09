let x = 100;
let hastighed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(x, 80, 30, 30);
  x = x + hastighed;
  if (x === width - 30 || x === 0) {
    hastighed = - hastighed;
  }
}
