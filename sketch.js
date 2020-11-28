
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(100,350,40,40);

   ground = new Ground(600,height,1200,20);

   dustbin1 = new Dustbin(1000,height-22,200,20);
   dustbin1.shapeColor = "yellow";
   dustbin2 = new Dustbin(900,height-70,20,100);
   dustbin3 = new Dustbin(1100,height-70,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


  
  drawSprites();
 

}

function keyPressed(){
  if(keyCode == UP_ARROW){
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
   }
  }
  
  
  