let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  background(255, 253, 231);
  textSize(50);
  fill(0);
  text(":(", width / 2, height / 2);
}

function draw() {
  if (frameCount % 60 == 0) {
    count++;

    if (count >= 63) {
      count = 0;
      background(255, 253, 231);
      textSize(50);
      fill(0);
      text(":(", width / 2, height / 2);
    }
  }

  if (count < 59) {
    if (frameCount % 60 == 0) {
      textSize(50);
      fill(random(255), random(255), random(255));
      text(":(", random(width), random(height));
    }
  } else {
    background(255, 253, 231);
    textSize(random(120, 180));
    fill(random(255), random(255), random(255));
    text("<3", width / 2, height / 2);
  }
}
