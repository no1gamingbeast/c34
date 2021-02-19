const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var reload;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   
  //  reloadImg=loadImage("sprites/reload.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //reload=createSprite(100,50,50);
   // reload.addImage("add",reloadImg);
    ground = new Ground(600,height,1200,20);
    ball=new Ball(200,200,40);
    //creating rope and attatching ball
    rope=new Rope(ball.body,{
        x:500,y:50
    });
   box1=new box(900,100,70,70) ;
   box2=new box(900,100,70,70) ;
   box3=new box(900,100,70,70) ;
   box4=new box(900,100,70,70) ;
   box5=new box(900,100,70,70) ;
   box6=new box(900,100,70,70) ;
   box7=new box(800,100,70,70) ;
   box8=new box(800,100,70,70) ;
   box9=new box(800,100,70,70) ;
   box10=new box(800,100,70,70) ;
   box11=new box(800,100,70,70) ;
   box12=new box(700,100,70,70) ;
   box13=new box(700,100,70,70) ;
   box14=new box(700,100,70,70) ;
   box15=new box(700,100,70,70) ;
   box16=new box(700,100,70,70) ;
   box17=new box(700,100,70,70) ;
   box18=new box(700,100,70,70) ;
   box19=new box(700,100,70,70) ;
   box20=new box(700,100,70,70) ;
    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    
        background("black");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    ball.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 rope.display();
 


























}

function mouseDragged(){
   
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}



