const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;

function preload(){
}


function setup() {
createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(0,height, width,10)
 
 
 for (var d = 0; d <width; d = d + 80){
   divisions.push(new Divisions(d,700,10,400))
 }

 for (var j = 75; j <width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 50; j <width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50; j <width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

}

function draw() {

  background("lightgreen");
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
    strokeWeight(3);
    stroke("yellow")
  }
 
  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -60 ,width/2+60 ),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  ground.display();
  
}