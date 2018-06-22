import { log } from "util";

class CannonBall {
  constructor(ballX, ballY, dx, dy, canX, canY, ctx, angle, shoot = false) {
    this.ballX = ballX;
    this.ballY = ballY;
    this.velocity = 10;
    this.dx = dx;
    this.dy = dy;
    this.shoot = false;
    this.angle = angle;
    this.ball = new Image();
    this.ball.src = 'cannonWireFrames/cannonBall.png';
    this.originalPos = [canX, canY];
   
   
    // this.originalPos = [75, 550];
  }
  // let canvas = document.getElementById("canvas");
  // let ctx = canvas.msGetInputContext("2D");
    draw(ctx) {
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    // debugger
  
    ctx.save()
    //takes the angle and rotates it by 
    // ctx.translate(75, 550);
    ctx.rotate(this.angle * Math.PI/180);
    // ctx.drawImage(this.ball, this.originalPos[0], this.originalPos[1]);
    ctx.drawImage(this.ball, this.ballX + 50, this.ballY - 15);
    ctx.restore();
    // this.originalPos[0] += this.dx;
      this.ballX += this.dx;
      this.dy-=0.1;
    // this.originalPos[1] -= this.dy;
      this.ballY -= this.dy;
    
    // this.angle += 2;
    // this.draw();
    // console.log(this.ballX, this.ballY);
   
  };
}

export default CannonBall;