function setup() {
  noLoop();
  console.log("Hej hej!");

  let a = [50, 170, 120, 355, 175];

  a.unshift(60);

  console.log(a);
}

function draw() {
  background(220);
}
