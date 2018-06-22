import Cannon from "../drawthings/cannon";
import {drawCanvas} from '../drawthings/drawcanvas';
import CannonBall from '../drawthings/cannonball';
let x1 = 60;
let y1 = 545;
let x2 = 75;
let y2 = 550;
let ballX = 200;
let ballY = 535;
let dx = 6;
let dy = 2;
let angle = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");




const TO_RADIANS = Math.PI/180;








 
// function rotateCannon() {
//   let otherCannon = new Cannon();
//   let tube = otherCannon.tube;
 
//   ctx.save();
//   //makes the new center point on the canvas the part of the cannon
//   //I want to rotate.
//   ctx.translate(x2, y2);
//   //takes the angle and rotates it by 
//   ctx.rotate(angle * TO_RADIANS);
//   ctx.drawImage(tube, -(tube.width/2), -(tube.height/2));
//   ctx.restore();
// }


function moveSomething(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37: // left key is pressed
      x1 -= 2;
      x2 -= 2;
      console.log('left', shoot);
      break;
    case 38: // up key is pressed  
      angle -= 1;
      // dx += 1;
      // dy -=0.1;
  
      console.log('up');
      break;
    case 39: // right key is pressed
      x1 += 2;
      x2 += 2;
      console.log('right');
      break;
    case 40: // down key is pressed
      angle += 1;
      // dx -= 1;
      console.log('down');
      break;
  }
}

document.addEventListener('keydown', moveSomething, false);


let shoot;
// let cannonBall = new CannonBall(ballX, ballY, dx, dy, ctx, angle, shoot = false);

let cannonArr = [];

function animate() {
  let cannon = new Cannon(x1, y1, x2, y2, angle, ctx);
  //creates new cannon element, with the preset arguments 
  
  
  
  //draws the scenery
  function shootBall(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 32:
      let cannonBall = new CannonBall(ballX, ballY, dx, dy, x2, y2, ctx, angle, shoot = false)
      cannonBall.shoot = true;
      cannonArr.push(cannonBall);
      break;
    }
  }



  
  //draws the background
  drawCanvas();


  //iterate through cannonBall array, drawing each ball in the array.
  cannonArr.forEach(ball => {
    ball.draw(ctx);
  
  })
  
  //draw the cannon
  cannon.draw()
  //draw 
  // cannon.rotateCannon(angle);
  // cannonBall();
  // console.log(cannonBall.shoot, cannonBall.ballX, 'hey!!!!');

 
  document.addEventListener('keydown', shootBall, false);
  
  
  cannonArr.forEach(ball => {
    if (ball.ballX > 1100 || ball.ballY > 635) {
      // debugger
      ball.shoot = false;
      cannonArr.splice(cannonArr.indexOf(ball), 1);
    }
    // console.log(cannonArr[0]);
    // console.log(ball.shoot);
    // console.log(ball.ballX, ball.ballY);
  }) 

  
  requestAnimationFrame(animate);
}; 

export default animate;