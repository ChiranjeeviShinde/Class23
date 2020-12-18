const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground1,ball;
var box1,box2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  box1 = new box(200,150,50,50);
  box2 = new box(240,100,50,50);

  ground1 = new ground(200,390,800,20);
}

function draw() {
  background(255,255,255); 
  
 Engine.update(engine);

 box1.display();
 box2.display();
 ground1.display();
}