
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var base;
var string;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   base= new Ground(600,300,1200,20);
   //rope= new Rope(ball.body, ground.body, ballDiameter*2, 0);
   string = new Rope(Ground.body,{x:200, y:50});

   ball= new Ball(600, 200, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  base.display();
  string.display();
  ball.display();
  drawSprites();
 
}



