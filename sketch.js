const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine;
var myworld;
var object;

function setup() {
  createCanvas(400,400);
 
myengine = Engine.create();
myworld = myengine.world

var options={
  isStatic:true
}
object = Bodies.rectangle(100, 200, 50, 50,options);
World.add(myworld,object);

console.log(object)
console.log(object.position.y)
}

function draw() {
  background(0); 
  Engine.update(myengine)
  rect(object.position.x,object.position.y,50,50) 
  drawSprites();
}


