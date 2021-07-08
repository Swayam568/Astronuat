function preload () {
  bg= loadImage("images/iss.png"); 
  sleep = loadAnimation("images/sleep.png"); 
  brush = loadAnimation("images/brush.png"); 
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png"); 
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png"); 
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png"); 
  move = loadAnimation("images/move1.png","images/move1.png","images/move.png","images/move.png");
}

function setup() {
  createCanvas(600,500);
  Astronuat = createSprite (300,230);
  Astronuat.addAnimation ("sleeping",sleep)
  Astronuat.scale = 0.1

}

function draw() {
  background(bg);  
  edges = createEdgeSprites();
  Astronuat.bounceOff (edges);
  
  if (keyDown(UP_ARROW)){
    Astronuat.addAnimation ("brushing",brush);
    Astronuat.changeAnimation ("brushing");
    Astronuat.y = 350;
    Astronuat.velocityX = 0
    Astronuat.velocityY = 0
  }

  if (keyDown(DOWN_ARROW)) {
    Astronuat.addAnimation ("gymming" ,gym)
    Astronuat.changeAnimation ("gymming");
    Astronuat.y = 350;
    Astronuat.velocityX = 0;
    Astronuat.velocityY = 0;
  }

  if (keyDown(RIGHT_ARROW)) {
    Astronuat.addAnimation ("bathing" ,bath)
    Astronuat.changeAnimation ("bathing");
    Astronuat.x = 300;
    Astronuat.velocityX = 0;
    Astronuat.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW)) {
    Astronuat.addAnimation ("eating" ,eat)
    Astronuat.changeAnimation ("eating");
    Astronuat.y = 350;
    Astronuat.x = 150;
    Astronuat.velocityX = 0.5;
    Astronuat.velocityY = 0.5;
  }

  if (keyDown("m")) {
    Astronuat.addAnimation ("moving" ,move)
    Astronuat.changeAnimation ("moving");
    Astronuat.velocityX = 1;
    Astronuat.velocityY = 1;
  }

  drawSprites();
}