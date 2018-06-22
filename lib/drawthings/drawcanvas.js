

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let sun = new Image();
let wall = new Image();
sun.src = 'cannonWireFrames/thesun.png';
wall.src = 'cannonWireFrames/brickwall.jpg';
// this function creates a rectangle once you pass in the
//appropriete arguments
export function colorRect(leftX, topY, width, height, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, height);
}

export const drawCanvas = () => {
  colorRect(0, 0, 1200, 600, '#89cff0');
  colorRect(0, 570, 1200, 40, 'green');
  // colorRect(270, 300, 30, 270, 'red');
  ctx.drawImage(sun, 25, 25);
  ctx.drawImage(wall, 270, 400, 30, 170);
};
