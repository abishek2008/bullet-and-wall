var bullet,wall,thickness;
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(223,321);
  thickness=random(22,83);
   bullet=createSprite (50,200,10,10);
   bullet.shapeColor="white";
   wall=createSprite(1600,200,thickness,height/2);
   wall.shapeColor="blue";
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  drawSprites();
  
 
 if(hascollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){

    wall.shapeColor="red";
   }

   if(damage<10){

    wall.shapeColor="green";
   }


 }


}


function hascollided(bullet,wall){
   bulletRightEdge=bullet.x+bullet.width;
   wallleftEdge=wall.x;

   if(bulletRightEdge>=wallleftEdge){
    return true;
   }
   return false;
    
}