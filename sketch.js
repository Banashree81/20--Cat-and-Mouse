
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse4.png");
    jerryImg3=loadAnimation("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.addAnimation("walking", tomImg2)
    tom.addAnimation("standing", tomImg3)
    tom.scale = 0.2;

    jerry = createSprite(200, 620);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.addAnimation("cheering", jerryImg2);
    jerry.addAnimation("watching", jerryImg3);
    
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   
   
    if(tom.x - jerry.x < (tom.originalWidth + jerry.originalWidth)/2){
        tom.velocityX = 0;
        tom.changeAnimation("standing", tomImg3)
        jerry.changeAnimation("watching", jerryImg3);

    }

    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    
      tom.velocityX = -5;
      tom.changeAnimation("walking", tomImg2)
      jerry.changeAnimation("cheering", jerryImg2);
  }


}
