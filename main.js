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
    this.x = 500;
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

var timer = 0;
var cactusArray = [];
var jumptimer = 0;

function 프레임마다실행할거() {
  requestAnimationFrame(프레임마다실행할거);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 120 프레임마다 장애물 생성, array에 넣음
  if (timer % 120 === 0) {
    var cactus = new Cactus();
    cactusArray.push(cactus);
  }
  // Array에 있는 것 모두 그림
  cactusArray.forEach((a, i, o) => {
    // x좌표가 0 미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }

    // a.x--;
    a.draw();
  });

  // 클릭시 +1
  if (jump == true) {
    dino.y--;
    jumptimer++;
  }

  // 100 프레임 이상인 경우 아래로
  if (jump == false) {
    dino.y++;
  }

  // 100 프레임 이상인 경우 정지
  if (jumptimer > 100) {
    jump = false;
  }

  //cactus.draw();
  dino.draw();
}

프레임마다실행할거();

// 스페이스 바 클릭 시 점프
var jump = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump = true;
  }
});
