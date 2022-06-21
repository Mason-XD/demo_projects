let colors = "3d348b-7678ed-f7b801-f18701-f35b04"
  .split("-")
  .map((a) => "#" + a);
let overAllTexture;
function setup() {
  createCanvas(800, 800);
  overAllTexture = createGraphics(width, height);
  overAllTexture.loadPixels();
  // noStroke()
  for (var i = 0; i < width + 50; i++) {
    for (var o = 0; o < height + 50; o++) {
      overAllTexture.set(
        i,
        o,
        color(100, noise(i / 3, o / 3, (i * o) / 50) * random([0, 40, 80]))
      );
    }
  }
  overAllTexture.updatePixels();
  fill(0);
  rect(0, 0, width, height);

  drawingContext.shadowColor = color(0, 100);
  drawingContext.shadowOffsetY = 3;
  drawingContext.shadowOffsetX = 3;
  drawingContext.shadowBlur = 20;
}

function draw() {
  fill(30, 30, 100, 0.85);
  rect(0, 0, width, height);
  push();
  translate(width / 2, height / 2);
  scale(0.73);
  let totalRotate =
    frameCount / 500 + mouseX / 100 + noise(frameCount / 1000) * 5;
  rotate(totalRotate);
  stroke(255, 150);

  noFill();
  strokeWeight(4);
  ellipse(0, 0, 900);
  stroke(255);
  line(480, 0, 550, 0);
  line(-480, 0, -550, 0);
  line(0, -480, 0, -520);
  line(0, 480, 0, 520);
  ellipse(0, 550, 50, 20);
  ellipse(0, -550, 50, 20);
  ellipse(0, 580, 30, 10);
  ellipse(0, -580, 30, 10);
  noStroke();
  fill(255);
  textSize(20);
  text(totalRotate.toFixed(2), 500, 30);
  // 		strokeWeight(2)

  // 		ellipse(0,0,1000)
  // arc(0,0,1000,1000,0,PI)

  noFill();
  blendMode(SCREEN);

  for (var i = 0; i < 200; i += 10) {
    stroke(255, 50);
    arc(0, 0, 1200, 1200, (PI / 200) * i, (PI / 200) * i + 0.035);
  }

  fill(random() < 0.3 ? colors[2] : 255);
  ellipse(
    0 + (noise(frameCount / 5, 10) - 0.5) * 50,
    0 + (noise(frameCount / 3, 1000) - 0.5) * 50,
    30 + noise(frameCount / 10) * 40
  );
  noFill();

  for (var i = 0; i < width; i += 100) {
    beginShape();
    strokeWeight(8 + random(-2, 2));
    let rr = (width - i) * 0.5;
    // ellipse(0,0,width-i)
    let clr = color(colors[int(i / 100) % 5]);
    clr.setAlpha(150);
    stroke(clr);
    let cc = color(clr);
    cc.setAlpha(100);
    drawingContext.shadowColor = cc;
    for (var o = 0; o < 150; o += 5) {
      let stAng = 0;
      let ang =
        stAng + o / (3 + i / 5000) + frameCount / (30 + o) + mouseY / 100;
      let xx = cos(ang) * (rr + i / 2) + (cos(ang * 8 + o / 100) * rr) / 200;
      let yy = sin(ang) * (rr - i / 10) + (sin(ang * 8 + o / 100) * rr) / 200;
      curveVertex(xx, yy);
      if (random() < 0.1) {
        push();
        scale(1.4);
        ellipse(xx, yy, 3);
        pop();
      }
    }
    endShape();
  }
  pop();
  push();
  blendMode(MULTIPLY);
  image(overAllTexture, 0, 0);
  pop();
}
