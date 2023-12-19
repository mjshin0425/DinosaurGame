const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);

// 1.공룡 등장 좌표
const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

// 3.애니메이션
dino.x += 1;
dino.draw();

// 2.장애물 생성

class Cactus {
  constructor() {
    this.x = 100;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var cactus = new Cactus();
cactus.draw();

function 프레임마다실행할거() {
  requestAnimationFrame(프레임마다실행할거);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dino.x++;
  dino.draw();
}

프레임마다실행할거();
