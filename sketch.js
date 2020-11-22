
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var engine,world;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(800, 660, 1600, 20);
	//Create the Bodies Here.
	Paperball=new Ball(100,100,20);
	Dustbin=new Basket(950,600,20,60);
	Dustbin1=new Basket(1000,640,100,20);
	Dustbin2=new Basket(1050,600,20,60);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paperball.display();
  Dustbin.display();
  Dustbin1.display();
  Dustbin2.display();
  ground.display();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paperball.ball,Paperball.ball.position,{x:85,y:-85});
	}
}
