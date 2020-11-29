// declare variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground

function setup() {
  // create canvas
  createCanvas(1200, 700);
  // create engine and put world inside
	engine = Engine.create();
	world = engine.world;

	//Create the bodies
  paper = new Paper(100, 645);
  ground = new Ground(600, 690);
  lWall = new Dustbin(840, 555, 20, 250);
  rWall = new Dustbin(1060, 555, 20, 250);
  bWall = new DustbinImage(950, 670, 200, 20);
  // run the engine
	Engine.run(engine);
  
}

function draw() 
{
  rectMode(CENTER);
  // make bg white
  background(255);
  // display bodies
  paper.display();
  ground.display();
  bWall.display();
  lWall.display();
  rWall.display();
  // update engine
  Engine.update(engine);
  // make paper go in dustbin
  keyPressed();
  // drawSprites
  drawSprites();
 
}

function keyPressed()
{
  // if the key is pressed
  if (keyWentDown(UP_ARROW))
  {
    // apply force
    Matter.Body.applyForce(paper.body, paper.body.position, {x:90, y:-90})
  }
}