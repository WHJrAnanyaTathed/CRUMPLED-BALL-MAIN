
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1; 
var ground;
var dustbin;
var papersHeight;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
dustbin = new Dustbin(1200,650);
	ground=new Ground(width/2,height,width,20);

	paper1=new Paper(200,450,70);
	//Create the Bodies Here.


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 
paper1.display();

dustbin.display();
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) 
	 { 
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
		 } 
		}

