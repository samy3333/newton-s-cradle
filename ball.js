class Ball{
    constructor(x, y, rad){
      var options= {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.ball = Bodies.circle(x, y, rad, options);
        this.rad= rad;
        World.add(world, this.ball);
    }
    display(){
      var pos =this.ball.position;
      push()
              translate(pos.x, pos.y);
              rectMode(CENTER)
              fill("red");
              ellipse(0,0,this.rad, this.rad);
              pop()
              
    }
}