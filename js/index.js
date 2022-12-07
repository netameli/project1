const backgroundImage = new Image();
backgroundImage.src = './images/sky.jpg';

const parent = document.querySelector(".parent")
const child = document.querySelector(".child-one")

document.querySelector('.btn-roll').addEventListener('click', function() {

    function drawBackground(){
      document.querySelector('.game-intro').style.display = 'none';
      document.querySelector('#game-board').style = 'width: 100vw; display: flex; justify-content: center;';
    }
   
  function startGame() {
      document.getElementById('game-board').style.display = 'block'; // game-board does not exist
      document.getElementById('background-img').style.display = 'none';
      currentBoard = new CanvasBoard();
  }

  console.log("CLICK");
  startGame()
})

let frameCount = 1;

let score = 0;
let frames = 0;
const myObstacles = [];
let intervalId;

class Board {
constructor(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.x = x;
  this.y = y;
}
}

 // function () // show board in click eventlistener - show your player parent-append-<div>  function () // method update, move 


class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

class Fish {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.img = './images/hero.png';
  }
  
  drawFish() {
    const fishImg = new Image();
    fishImg.src = this.img;
    height: 30;
    width: 30;
    color: 'yellow';
  };
  moveFish(keyCode) {
  }  

updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  frames += 1;
  if (frames % 120 === 0) {
    let x = canvas.height;
    let minWidth = 90;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 0;
    let maxGap = 400;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Obstacle(width, 10, "red", gap, 0));
    console.log(myObstacles);
  }
}

 updateScore() {
  score = Math.floor(frames/10); // 1 sec -->12
  ctx.font = '18px serif';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${score}`, 350, 50);
}

 crashWith(obstacle) {
  return !(
    fish.bottom() < obstacle.top() ||
    fish.top() > obstacle.bottom() ||
    fish.right() < obstacle.left() + 5 ||
    fish.left() > obstacle.right() - 5
  );
}

 checkWin() {
  }

 stop() {
  clearInterval(intervalId);
}
}
    
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
   
    startGame(); // initialize the game
    intervalId = setInterval(updateGame, 20) // send updates to the game
    // updateGame();
  };
};

document.addEventListener('keydown', event => {
  console.log('event keyCode', event.keyCode);
  switch (event.keyCode) {
    case 37:
      fish.moveLeft();
      console.log('left', fish);
      break;
    case 39:
      fish.moveRight();
      console.log('right', fish);
      break;
  }
});