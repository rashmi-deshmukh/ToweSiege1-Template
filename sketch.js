const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	
   
	Engine.run(engine);

}

function draw() {

  background(230);
  

 
}

function mouseDragged(){

}
function mouseReleased(){
	
}

function keyPressed(){
	if(keyCode==32){
		
	}
}
