var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var turn = 0;
var gameState ="play"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(" 500 ",30,550);
 text(" 500 ",90,550);
 text(" 500 ",180,550);
 text(" 200 ",240,550);
 text(" 200 ",330,550);
 text(" 200 ",420,550);
 text(" 100 ",500,550);
 text(" 100 ",580,550);
 text(" 100 ",650,550);
 text(" 100 ",740,550);

  Engine.update(engine);
   if(gameState=="end"){
     textSize(50)
     text("GAME OVER",200,300)
   } 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();

     
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
   
      if(particle.body.position.x<300){
score=score+500;
particle=null;
if(turn>=5)gameState="end"
      }
      
  else if(particle.body.position.x>300 && particle.body.position.x<600){
    score=score+200;
    particle=null;
    if(turn>=5)gameState="end"
  }
  else if(particle.body.position.x>600 && particle.body.position.x<900){
    score=score+200;
    particle=null;
    if(turn>=5)gameState="end"
  }
     }
    }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function keyPressed(){
  if(keyCode==32){
if(gameState!=="end"){
  turn++;
  particle=new Particle(mouseX,10,10);
}
  }
}