
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var wall1,wall2,wall3
var ground
var dustbinimage
var paper


function preload()
{
	dustbinimage = loadImage("dust.png")
}

function setup() {
	createCanvas(1200, 400);

  dustbin = createSprite(1010,270,20,50);
  dustbin.addImage(dustbinimage)
  dustbin.scale=0.6

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (600,380,1250,20)
    wall1 = new Wall(1076,270,20,200)
    wall2 = new Wall(943,270,20,200)
    wall3 = new Wall(1010,360,150,20)
    paper = new Paper(200,200,55)

	Engine.run(engine);


  
  Slingshot= new Slingshot(paper.body,{x:200,y:150});
}


function draw() {
  background(220);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
 dustbin.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  Slingshot.fly(paper.body)
}
