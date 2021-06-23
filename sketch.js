
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 400);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Ball = new PAPER(20,350);
   ground = new Ground(300,height,600,20);
   Dustbin = new dustbin(380,380,100,20);
   Dustbin2 = new dustbin(320,350,20,80);
   Dustbin3 = new dustbin(420,350,20,80);

	Engine.run(engine);
    
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  Ball.display();
  ground.display();
  Dustbin.display();
  Dustbin2.display();
  Dustbin3.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Ball.body,Ball.body.position,{x:10,y:-15});
  }
}

