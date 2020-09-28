var 
player,monkey_running,bananaImage,obstacleImage,backgroun,backgroundImage,ground,bananaGroup,obstacleGroup;

var score=0; 

function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backgroundImage=loadImage("jungle.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
  
}

function setup() {
  createCanvas(800,400);
  
  backgroun = createSprite(0,0,800,400);
  backgroun.addImage(backgroundImage);
  backgroun.velocityX = -4;
  backgroun.scale = 1.5;
  backgroun.x = backgroun.width/2;
  
  ground = createSprite(400,350,800,10);
  ground.visible = false;
  
  player = createSprite(100,340,20,50);
  player.addAnimation(monkey_running);
  player.scale = 0.1;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
  
}

function draw() {
  background(220);
  if(backgroun.x<100){
   backgroun.x = backgroun.width/2; 
  }
  
  if(keyDown("space") && player.y >= 158){
   player.velocityY = -12;
  }
  
  if(obstacleGroup.isTouching(player)){
   player.scale = 0.2; 
  }
  
  if(bananaGroup.isTouching(player)){
    score = score+2;
    bananaGroup.destroyEach();
  }
  
   switch(score){
    case 10: player.scale = 0.12;
             break;
    case 20: player.scale = 0.14;
             break;
    case 30: player.scale = 0.16;
             break;
    case 40: player.scale = 0.18;
             break;
       default: break;
   }
    
  
  player.collide(ground);
  
  player.velocityY = player.velocityY + 0.8;
  
  fruits();
  obstacles();

  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);

  
  
  
  drawSprites();
  
  
}


function fruits(){
 if(World.frameCount % 80 === 0)
 {
   var banana = createSprite(300,120);
   banana.y = Math.round(random(300,100));
   banana.addImage(bananaImage);
   banana.velocityX = -6;
   banana.scale = 0.1;
   banana.lifetime = 300;
   bananaGroup.add(banana);
 }
}

function obstacles()
{
 if(World.frameCount % 300 === 0)
 {
  var obstacle = createSprite(800,350,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.lifetime = 300;
   obstacle.scale = 0.2;
   obstacleGroup.add(obstacle);
 }
}