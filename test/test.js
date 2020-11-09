let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);

  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
}

class Particle {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.dx = random(-1, 1);
    this.dy = random(-1, 1);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    
    let dx = mouseX - this.x;
    this.x = this.x + dx / 10;
  }

  draw() {
    noStroke();
    circle(this.x, this.y, 5);
  }
}
