class CannonBall {
  constructor(ballX, ballY, dx, dy,canX, canY, ctx, angle, shoot = false) {
    this.ballX = ballX;
    this.ballY = ballY;
    this.dx = dx;
    this.dy = dy;
    this.shoot = false;
    this.angle = angle;
    this.ball = new Image();
    this.ball.src = 'cannonWireFrames/cannonBall.png';
    this.originalPos = [canX, canY];
  }
  // let canvas = document.getElementById("canvas");
  // let ctx = canvas.msGetInputContext("2D");
    draw(ctx) {
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    // debugger
    ctx.save()
    // ctx.translate(this.ballX, this.ballY);

    //takes the angle and rotates it by 
    ctx.rotate(this.angle * Math.PI/180);
    ctx.drawImage(this.ball, this.originalPos[0], this.originalPos[1]);
    ctx.restore()
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    // this.draw();
    this.originalPos[0] += this.dx;
    this.originalPos[1] -= this.dy;
    // this.angle += 2;
    // this.draw();
    // console.log(dx, dy);
  };
}

export default CannonBall;