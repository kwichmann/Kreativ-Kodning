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

class Bold {
  constructor() {
    this.stor = random(30, 80);
    this.x = random(this.stor / 2, width - this.stor / 2);
    this.y = random(this.stor / 2, height - this.stor / 2);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.v = random(360);
    this.dv = random(-10, 10);
  }

  tegn() {
    push();
    translate(this.x, this.y);
    rotate(this.v);
    image(bold, 0, 0, this.stor, this.stor);
    pop();
  }

  opdater() {
    this.x = this.x + this.dx;
    if (this.x < this.stor / 2 || this.x > width - this.stor / 2) {
      this.dx = -this.dx;
    }

    this.y = this.y + this.dy;
    if (this.y < this.stor / 2 || this.y > height - this.stor / 2) {
      this.dy = -this.dy;
    }

    this.v = this.v + this.dv;
  }
}
