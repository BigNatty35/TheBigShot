

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
 
// this function creates a rectangle once you pass in the
//appropriete arguments
export function colorRect(leftX, topY, width, heigth, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, heigth);
}






export const drawCanvas = () => {

  colorRect(0, 0, 800, 600, '#89cff0');
  
  colorRect(0, 570, 800, 40, 'green');
  // cannon(canvasContext);
  // requestAnimationFrame(drawCanvas);
};


//requestAnimationFrame