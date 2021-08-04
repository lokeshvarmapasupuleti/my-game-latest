var zombieWalk
var zombieIdle
var bg
var pltimage
var playerJump
var pltGroup
var antidotimg
var zombieAttack
function preload(){
bg = loadImage("bg.jpg");
zombieIdle=loadAnimation("idle1.png")
zombieWalk=loadAnimation("walk1.png","walk2.png","walk3.png")
pltimage=loadAnimation("Platform.png")
playerIdle=loadAnimation("Pidle.png")
playerRun=loadAnimation("Prun 1.png","Prun2.png","Prun3.png")
playerJump=loadAnimation("jump1.png","jump2.png","jump3.png")
antidotimg=loadAnimation("antidot.png")
zombieAttack=loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png")
}
function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  ground=createSprite(displayWidth/2,displayHeight-110,displayWidth-100,20)
  player=createSprite(50,displayHeight-200);
  player.addAnimation("idle",playerIdle);
  player.addAnimation("walk",playerRun);
  player.scale=0.5
  pltGroup=new Group()

 zombie=createSprite(displayWidth-150,displayHeight-200);
 zombie.addAnimation("idle",zombieIdle);
 zombie.addAnimation("walk",zombieWalk);
 zombie.scale=0.5;
 zombie.velocityX=-3
}

function draw() {
  background(bg);  
  player.collide(ground)
  if(keyWentDown("RIGHT_ARROW")){
    player.velocityX=2
    player.changeAnimation("walk")
  }
  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX=0
    player.changeAnimation("idle")
    }
    if(keyWentDown("LEFT_ARROW")){
      player.velocityX=-2
      player.changeAnimation("walk")
      }
      if(keyWentUp("LEFT_ARROW")){
        player.velocityX=0
        player.changeAnimation("idle")
        }
        if(keyWentDown("UP_ARROW")){
          player.velocityY=-10
          player.changeAnimation("jump")
          }
          player.velocityY+=0.9


if (pltGroup.isTouching(player)){
  player.collide(pltGroup)
}
        spawnPlatforms()
  drawSprites();
}
function spawnPlatforms(){
if (frameCount%120===0){
  var plt=createSprite(displayWidth,random(100,700),120,30)
  plt.velocityX=-3
  plt.addAnimation("plt",pltimage)
  plt.scale=0.5
  if(frameCount%360===0){
    var antidot = createSprite(plt.x,plt.y-100,50,50)
  antidot.velocityX=-3
  antidot.addAnimation("antidot",antidotimg)
  antidot.scale=0.5
  antidot.bounceOff(plt)
  }
  pltGroup.add(plt)
}
}