class Rope{
  constructor(body1, body2, offsetX, offsetY){
this.offsetX= offsetX;
this.offsetY= offsetY;
var option={
  body1,
  body2
   
}
this.rope = Bodies.rectangle(body1, body2, option);
World.add(world, this.rope);

   Matter.Constraint.create(option);
  }
  display(){
    var pointA= this.rope.body1.position;
    var pointB= this.rope.body2.position;
push()
    strokeWeight(2);

    var Anchor1X=pointA.x;
    var Anchor1Y= pointA.y;

    var Anchor2X=pointB.x;
    var Anchor2Y=pointB.y;

    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    pop()
  }
}


