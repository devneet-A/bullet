var bullet,wall;
var speed,weight,damage,thickness;
function setup() {
  createCanvas(800,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness = random(22,38);

  bullet = createSprite(400, 200, 10, 5);
  bullet.shapecolor = "white";
  wall = createSprite(700,200,100,thickness,height/2);
 wall.fill = "blue";
  damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness

}

function draw() {
  background(0);  
  bullet.velocityX = speed;

if (hasCollided(bullet,wall)){
var damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness;
}
if (damage>10){
  wall.shapeColor = "green";
}
if (damage<10){
  wall.shapeColor = "red";
}
  
hasCollided(bullet,wall);
  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
  
}
return false;

}