const fish = document.querySelector(".hero")
const obstacle = document.querySelector(".obstacles")
const arrayObstacles = []
let currentGame;
let intervalId;


class Game {
  constructor() {
      this.fish = {},
      this.obstacles = [];
      this.score = 0;
  }
}

class Obstacle {
  constructor(name, x, y) {
    this.x = Math.floor(Math.random()* 650);
    this.y = Math.floor(Math.random()* 450);
    this.name= "squid"
    this.width= 60;
    this.height=30;
    const Element = document.createElement("div")
    Element.classList = this.name +" obstacle"
    const obstacles = document.getElementById("obstacles")
    obstacles.appendChild(Element)
    this.element = Element
  }

  bottom (){
    return this.y + this.height;
  }

  top (){
    return this.y;
  }

  left (){
    return this.x;
  }

  right (){
    return this.x + this.width;
  }

  hideObstacle () {
    this.element.style.display= "inline"
  }

  showObstacle ()  {
   // this.element.style.display = "inline"
    this.element.style.left = this.x + "px"
    this.element.style.top = this.y + "px"
  }

}

class Fish {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = 20;
    this.y = 70; 
    this.fish = fish;
  }

  bottom (){
    return this.y + this.height;
  }

  top (){
    return this.y;
  }

  left (){
    return this.x;
  }

  right (){
    return this.x + this.width;
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
  }

} 

window.onload = () => {
  document.getElementById('button').onclick = () => {
    startGame(); 
    //intervalId = setInterval(updateGame, 20);
    console.log("buttonworking");
  }
}

function startGame() {
  const fish = new Fish()
  let intervalId = setInterval (function() { 
   const obstacles = new Obstacle ()
   obstacles.showObstacle () 
   console.log(obstacles)
   arrayObstacles.push(obstacles)
   checkCollision()
  }, 6000);
  document.addEventListener('keydown', event => {
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

  function checkCollision() { 
    const crashed = arrayObstacles.some(function (obstacle) {
      return isCollided(obstacle);
    });

    if(crashed) {
      console.log("hello");
    }
  }
  }

  function isCollided(obstacle) {
    return !(
      ((fish.y + fish.height) < (obstacle.y)) ||
      (fish.y > (obstacle.y + obstacle.height)) ||
      ((fish.x + obstacle.width) < obstacle.x) ||
      (fish.x > (obstacle.x + obstacle.width))
      );
    }




    //  crashWith(obstacle) {
//   return !(
//     fish.bottom() < obstacle.top() ||
//     fish.top() > obstacle.bottom() ||
//     fish.right() < obstacle.left() + 5 ||
//     fish.left() > obstacle.right() - 5
//   );


  // collisionDetect() {
  //     if (this !== obstacle) {
  //       const x = this.x - obstacle.x;
  //       const y = this.y - obstacle.y;
  //       const distance = Math.sqrt(x * x + y * y);
        
  //       return true
  //       if (distance < this.size + obstacle.size); 
  //     }
  // }
// function detectCollision(obstacle) {
//   return !((fish.y > obstacle.y + obstacle.height) || 
//   (fish.x + fish.width < obstacle.x) || 
//   (fish.x - fish.width  > obstacle.x + obstacle.width))
// }
//   if (isCollided(currentGame.obstacles[i])) {
//     alert('hello!')
//     currentGame.score = 0++;
//     document.getElementById('score').innerHTML = 0;
//     currentGame.obstacles = [];
//     document.getElementById('game-board').style.display = 'none';

// function isCollided(fish, obstacle) {
//   return !(
//       ((fish.y + fish.height) < (obstacle.y)) ||
//       (fish.y > (obstacle.y + obstacle.height)) ||
//       ((fish.x + obstacle.width) < obstacle.x) ||
//       (fish.x > (obstacle.x + obstacle.width))
//   );
// }


  

// next step is to build an array and pick a random name from this array. 
// push the obstacle to the array const my obstacle = new obstacle 
 // const obstacles = [new Obstacle("angel"), new Obstacle("tropic"), new Obstacle("turtle"), new Obstacle("squid"), new Obstacle("koi"), new Obstacle("animal") ] 
// for (i=0; i < obstacles.length; i++) {  obstacles[i].hideObstacle() }
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


// }

//  stop() {
//   clearInterval(intervalId);
// }
// }//   drawFish() {
//     const fishImg = new Image();
//     fishImg.src = this.img;
  
  // positionObstacle() {
  //   for (i = 0; i < myObstacle.length; i++) {
  //     myObstacle[i].y += 1;
  //     myObstacle[i].update();
  //   }

  // //function startGame() {
//      // document.getElementById('game-board').style.display = 'block'; // game-board does not exist
//       // document.getElementById('background-img').style.display = 'none';
//       //currentBoard = new CanvasBoard();}

//   //console.log("CLICK");
//   //startGame()})

// let frameCount = 1;
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



//   frames += 1;
//   if (frames % 120 === 0) {
//     let x = board.height;
//     let minWidth = 90;
//     let maxWidth = 300;
//     let width = Math.floor(
//       Math.random() * (maxWidth - minWidth + 1) + minWidth
//       );
//       let minGap = 0;
//       myObstacles.push(new Obstacle());
//       console.log(myObstacles);
//     }
//   }