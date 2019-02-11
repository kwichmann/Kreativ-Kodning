function preload() {
  bold = loadImage("fodbold.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  imageMode(CENTER);

  let nyBold = new Bold();

  nyBold.tegn();
}

function draw() {
  // background(220);
  tegn();
  opdater();
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
    translate(this.x, this.y);
    rotate(this.v);
    image(bold, 0, 0, this.stor, this.stor);
  }

  opdater() {
    x = x + dx;
    if (x < stor / 2 || x > width - stor / 2) {
      dx = -dx;
    }

    y = y + dy;
    if (y < stor / 2 || y > height - stor / 2) {
      dy = -dy;
    }

    v = v + dv;
  }
}
