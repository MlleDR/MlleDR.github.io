// 03.09.18 : first commit
// to do : update function to add animation

var S_Store = [];

function setup() {
  createCanvas(640, 640);
  background(0);
  
  var npoints = 90;
  for (var i = 0; i < npoints; i++) {
    S_Store[i] = new SPINNER(width / 2, height / 2, (i / (npoints / 2)) * Math.PI);
  }
}

function draw() {
  for (var i = 0; i < S_Store.length; i++) {
    S_Store[i].show();
  }
}

function SPINNER(cX, cY, angle) {
  this.posmin = createVector(0, 0); // min point
  this.posmax = createVector(0, 0); // max point

  this.show = function () {
    this.posmin.x = pX(cX, 50, angle);
    this.posmin.y = pY(cY, 50, angle);
    this.posmax.x = pX(cX, 200, angle);
    this.posmax.y = pY(cY, 200, angle);

    strokeWeight(1);
    stroke(154, 26, 64, 150);
    point(this.posmin.x, this.posmin.y);

    strokeWeight(3);
    stroke(153, 136, 136, 150);
    point(this.posmax.x, this.posmax.y);
  }  
}

// cX and cY are the starting points (ex: center of canvas)
function pX(cX, radius, angle) {
  return cX + radius * Math.sin(angle);
}

function pY(cY, radius, angle) {
  return cY + radius * Math.cos(angle);
}
