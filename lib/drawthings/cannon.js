// import {colorRect} from './drawcanvas';
// import {canvas, canvasContext} from './drawcanvas';
// let player1X = 100;
// let player1Y = 555;
// let deltaX = 0;
// let p1cannonBarrelX = player1X + deltaX;
// let p1cannonXAngle = 0;
// let p1cannonBarrelY = 10;
// let p1cannonYAngle = 555;
// let img = new Image();
// let img2 = new Image();

// img.scr = "cannonWireFrames/cannonBase.png";

// document.addEventListener('keydown', moveSomething, false);





// export function moveSomething(e) {
//   switch(e.keyCode) {
//     case 37: // left key is pressed
//     player1X -= 3;
//   console.log('hello');
  
//     break;
//     case 38: // up key is pressed
//     p1cannonXAngle -= 2;
//     p1cannonYAngle -= 20;
//     break;
//     case 39: // right key is pressed
//     player1X += 3;

//     break;
//     case 40: // down key is pressed
//     p1cannonXAngle += 2;
//     p1cannonYAngle += 2;
//     break;
//     }
//     cannon();
// }




// export const cannon = ctx => {

//   img2.src = 'cannonWireFrames/cannonBase.png';
//   img.src = 'cannonWireFrames/cannonTube.png';
//   img2.onload = function() {
//     ctx.drawImage(img2, 115, 545);
//   }; 
//   img.onload = function() {
//     ctx.drawImage(img, 100, 525);
//   };
// };

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

export const TO_RADIANS = Math.PI / 180;

function Cannon(x1, y1, x2, y2, angle, ctx) {
  this.base = new Image();
  this.tube = new Image();
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.angle = angle;
  this.base.src = 'cannonWireFrames/cannonBase.png';
  this.tube.src = 'cannonWireFrames/cannonTube.png';
  this.draw = function() {
    // ctx.drawImage(this.tube, this.x2, this.y2);
  
    ctx.drawImage(this.base, this.x1, this.y1);
  };

  this.rotateCannon = function(angle) {
    // let otherCannon = new Cannon();
   

    ctx.save();
    //makes the new center point on the canvas the part of the cannon
    //I want to rotate.
    ctx.translate(x2, y2);
    //takes the angle and rotates it by 
    ctx.rotate(angle * TO_RADIANS);
    ctx.drawImage(this.tube, -(this.tube.width / 2), -(this.tube.height / 2));
    ctx.restore();
  }

  
}


// export function barrel() {
//   // canvasContext.translate(100, 555);
//   colorRect(0, 0, 25, 2, "red");
// }



export default Cannon;