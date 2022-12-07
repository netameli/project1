

// const parent = document.querySelector(".parent")
const fish = document.querySelector(".hero")

// //function startGame() {
//      // document.getElementById('game-board').style.display = 'block'; // game-board does not exist
//       // document.getElementById('background-img').style.display = 'none';
//       //currentBoard = new CanvasBoard();}

//   //console.log("CLICK");
//   //startGame()})

// let frameCount = 1;

// let score = 0;
// let frames = 0;
// const myObstacles = [];
// let intervalId;

// class Board {
// constructor(width, height, color, x, y) {
//   this.width = width;
//   this.height = height;
//   this.color = color;
//   this.x = x;
//   this.y = y;
// }
// }

//  // function () // show board in click eventlistener - show your player parent-append-<div>  function () // method update, move 


// class Obstacle {
//   constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//   }
// }

class Fish {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0; 
    this.fish = fish;
  
    
  }
  
  moveup() {
    if (this.y < 10) return;
    this.y -=20; 
    this.fish.style.top = this.y+"px";
    //limit
  }

  movedown() {
    if (this.y > 500) return;
    this.y +=20
    this.fish.style.top = this.y+"px";
    //limit
  }
  moveleft() {
    if (this.x < 20) return;
    this.x -= 20; 
    this.fish.style.left = this.x+"px";
    //limit
  }

  moveright() {
    if (this.x > 650) return;
    this.x += 20; 
    this.fish.style.left = this.x+"px";
    //limit
  }
} 
//   drawFish() {
//     const fishImg = new Image();
//     fishImg.src = this.img;
  
//     moveFish(keyCode) {}  

// updateObstacles() {
//   for (i = 0; i < myObstacles.length; i++) {
//     myObstacles[i].y += 1;
//     myObstacles[i].update();
//   }
//   frames += 1;
//   if (frames % 120 === 0) {
//     let x = canvas.height;
//     let minWidth = 90;
//     let maxWidth = 300;
//     let width = Math.floor(
//       Math.random() * (maxWidth - minWidth + 1) + minWidth
//     );
//     let minGap = 0;
//     let maxGap = 400;
//     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     myObstacles.push(new Obstacle(width, 10, "red", gap, 0));
//     console.log(myObstacles);
//   }
// }

//  crashWith(obstacle) {
//   return !(
//     fish.bottom() < obstacle.top() ||
//     fish.top() > obstacle.bottom() ||
//     fish.right() < obstacle.left() + 5 ||
//     fish.left() > obstacle.right() - 5
//   );
// }

//  stop() {
//   clearInterval(intervalId);
// }
// }
    
window.onload = () => {
  document.getElementById('button').onclick = () => {
    startGame(); 
    //intervalId = setInterval(updateGame, 20);
    
    console.log("buttonworking");
  }
}

function startGame() {
  const fish = new Fish()
  document.addEventListener('keydown', event => {
   // fish.moveLeft();
   // fish.moveright();

    switch(event.key) {
      case "ArrowUp":
        fish.moveup();
        console.log("UP");
        break;
      case "ArrowDown":
        fish.movedown();
        console.log("Down");
        break;
      case "ArrowLeft":
        fish.moveleft();
        console.log("Left")
        break;
      case "ArrowRight":
        fish.moveright();
        console.log("Right")
        break;
      }
  })
}



    // fish.movedown();

// //document.addEventListener('keydown', event => {
//   //console.log('event keyCode', event.keyCode);
//   //switch (event.keyCode) {
//     //case 37:
//       //fish.moveLeft();
//       //console.log('left', fish);
//       //break;
//     //case 39:fish.moveRight();
//