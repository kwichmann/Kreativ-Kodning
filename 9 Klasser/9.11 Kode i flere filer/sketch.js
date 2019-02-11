let bolde = [];
const n = 500;

let bold;

function preload() {
  bold = loadImage("fodbold.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  imageMode(CENTER);

  for (let i = 0; i < n; i++) {
    let nyBold = new Bold();
    bolde.push(nyBold);
  }
}

function draw() {
  background(220);
  bolde.forEach((b) => {
    b.tegn();
    b.opdater();
  });
}
