var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {  
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColour=colour(255);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColour=colour(80,80,80);

  if(wall.x=car.x<(car.width+wall.width)/2);
  {
   car.velcityX=0;
   var Deformation=0.5*weight*speed/22500
   if(Deformation<180);
   }
   car.shapeColour=colour(255,0,0);
   }
   if(Deformation<100);
   {
   car.shapeColour=colour(0,255,0);
   }
  

   drawSprites();