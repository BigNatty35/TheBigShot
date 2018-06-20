import Cannon from "../drawthings/cannon";
import {drawCanvas} from '../drawthings/drawcanvas';



document.addEventListener('keydown', moveSomething, false);

let x1 = 60;
let y1 = 545;
let x2 = 75;
let y2 = 550;
let angle = 18;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const TO_RADIANS = Math.PI/180;


function rotateCannon() {
  let otherCannon = new Cannon();
  let tube = otherCannon.tube;
 
  
  ctx.save();
  ctx.translate(x2, y2);
  ctx.rotate(angle * TO_RADIANS);
  ctx.drawImage(tube, -(tube.width/2), -(tube.height/2));
  ctx.restore();
}


function moveSomething(e) {
  
  switch (e.keyCode) {
    case 37: // left key is pressed
      x1 -= 10;
      x2 -= 10;
     
      console.log('hello');

      break;
    case 38: // up key is pressed
    console.log('yoooo');
    console.log(angle);
    
      angle -= 2;
      rotateCannon();
      break;
    case 39: // right key is pressed
      x1 += 10;
      x2 += 10;
      

      break;
    case 40: // down key is pressed
      angle += 2;
      rotateCannon();
      break;
  }
  // cannon();
}




function animate() {
  let cannon = new Cannon(x1, y1, x2, y2, angle, ctx);
  requestAnimationFrame(animate);
  drawCanvas();
  rotateCannon();
    cannon.draw();
    // cannon.moveSomething();
}

export default animate;