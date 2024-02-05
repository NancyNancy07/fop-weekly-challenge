// 16: Example

let snowFlakes = [];
for (i = 0; i < 200; i++) {
  const flake = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    light: Math.random(),
  };
  snowFlakes.push(flake);
}
frameRate(20);
function draw() {
  noStroke();
  background(100, 200, 255);
  for (let flake of snowFlakes) {
    fill(255, 255, 255, Math.abs(Math.sin(flake.light) * 255));

    ellipse(flake.x, flake.y, 8);
    flake.light =  flake.light + 0.02;
    flake.y = flake.y + 3;
    if (flake.y > height) {
      flake.y = Math.floor(Math.random() * flake.y);
    } else if (flake.x > width) {
      flake.x = Math.floor(Math.random() * flake.x);
    }
  }
}