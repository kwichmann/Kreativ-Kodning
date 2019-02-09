function setup() {
  noLoop();
    
  console.log(sum(2, 3));
}
  
function draw() {
  background(220);
}
  
// f(x) = 2*x + 5
function f(x) {
  const y = 2 * x + 5;
  return y;
}

function sum(a, b) {
  return a + b;
}
