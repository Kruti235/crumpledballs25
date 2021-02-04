
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dust1;
var ground;

function preload()
{
	dustImg = loadImage("dustbingreen.png");
	peperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	ground.debug = true;
	paper = new Paperball(200,450,40);
	
	dust1 = new Dustbin(1200,600);


	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(255);
  ground.display();
 
  dust1.display();
  paper.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.position,{x:350,y:-350})
	}
}

