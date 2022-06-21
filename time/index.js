// This is not part of the sketch:
document.body.style.backgroundColor = "#000";

// ----------------------------------------
// Sketch:
// ----------------------------------------
i = 0;
r = 300;
draw = (_) => {
  i || createCanvas((W = 500), W, WEBGL);
  rotateX((P = PI / 2));
  [1, 1, -1].map((i) => spotLight(W, W, W, 0, W * i, 0, 0, -i, 0));
  for (e = P; e > -P; e -= P / 8) {
    push();
    c = r * cos(e + i);
    y = r * sin(e + i);
    translate(0, 0, y / 2);
    scale((Y = y / 200), Y, 0.1);

    // pop(torus(c/2,20,64)) // For compressed version

    // 2 Lines bellow are for non-compressed version
    noStroke();
    pop(torus(c / 2, 20));
  }
  box(1000);
  i = (i - P / 256) % (P / 8);
};
