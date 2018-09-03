// POINT-ON-CIRCLE | 03.09.18

var S_Store = [];

function setup() {
  createCanvas(640, 640);
  background(0);
  S_Store[0] = new SPINNER(width / 2, height / 2);
}

function draw() {
  S_Store[0].show();
}

function SPINNER(cX, cY) {
  this.poscenter = createVector(0, 0); // center point
  this.posmin = createVector(0, 0); // min point
  this.posmax = createVector(0, 0); // max point

  this.show = function () {
    this.poscenter.x = pX(cX, 0, 0);
    this.poscenter.y = pY(cY, 0, 0);
    this.posmin.x = pX(cX, 50, 90);
    this.posmin.y = pY(cY, 50, 90);
    this.posmax.x = pX(cX, 200, 180);
    this.posmax.y = pY(cY, 200, 180);

    strokeWeight(3);
    stroke(255);
    point(this.poscenter.x, this.poscenter.y);

    stroke(255, 0, 0);
    point(this.posmin.x, this.posmin.y);

    stroke(0, 255, 255);
    point(this.posmax.x, this.posmax.y);
  }
}

// cX and cY are the starting points (ex: center of canvas)
function pX(cX, radius, angle) {
  return cX + radius * Math.sin(radians(angle));
}

function pY(cY, radius, angle) {
  return cY + radius * Math.cos(radians(angle));
}
