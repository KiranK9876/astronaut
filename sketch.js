var bg,bgImg
var bath,bathImg

var sleep,sleepImg
var brush,brushImg
var gym,gymImg
var eat,eatImg
var drink,drinkImg
var move,moveImg
var astronaut
var edges


function preload(){
  bgImg = loadImage("iss.png")
  sleepImg = loadAnimation("sleep.png")
  brushImg = loadAnimation("brush.png")
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eatImg = loadAnimation("eat1.png","eat2.png")
  drinkImg = loadAnimation("drink1.png","drink2.png")
  moveImg = loadAnimation("move.png","move1.png")
  bathImg = loadAnimation("bath1.png", "move1.png")
}




function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400,200)
  astronaut.addAnimation("sleep",sleepImg)
  astronaut.scale=0.1


}

function draw() {
  background(bgImg) 
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gym",20, 70);
  text("Left Arrow = Eat",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}
