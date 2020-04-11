const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bodies;
var rain;

function setup() {
  createCanvas(800,400);
  Engine.create(engine);
  engine=Engine.World;
  rain =new Drop(random(100,700),random(25,30),random(10,40))
 
 
}

function draw() {
  Engine.update(engine);
  for(var i=0;i<rain.y;i++){
  rain.display();
  }
 

  } 
 
