const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var  fairy,fairyFly,fairycatch,fairyImg;
var star,starImg,back,backImg;
var joy;
var engine, world;

function preload(){
  engine = Engine.create();
    world = engine.world;

  fairyFly=loadAnimation("images/fairy1.png","images/fairy2.png");

backImg=loadImage("images/starnight.png");

starImg=loadAnimation("images/star.png");

loadSound(sound/JoyMusic.mp3);

  //preload the images here
}

function setup() {
  createCanvas(600, 600);

  back=createSprite(300,300,600,600);
  back.addImage("backGround",backImg);

  fairy=createSprite(100,300,20,20);
fairy.addAnimation("flying",fairyFly);
fairy.scale=0.2;

star=createSprite(500,100,20,20);
star.addAnimation("star", starImg );
star.scale=0.2;
}
starBody = Bodies.rectangle(star.x,star.y, star.width, star.height);
    this.width = width;
    this.height = height;
    
Sound.loop();

function draw() {
  background("black");
joy=loop();
fairy.debug=true;

Engine.update(engine);


fairy.setCollider("rectangle",0,0,1000,1000); 
star.velocityY=+2
  if (keyDown("right_arrow")){
    fairy.x=fairy.x+3
  }
  if (keyDown("left_arrow")){
    fairy.x=fairy.x-3
  }
    

if(star.isTouching(fairy)){
star.velocityY=0;

}

drawSprites();

}
