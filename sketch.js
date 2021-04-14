const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rubber= new Rubber(900,450,70)
stone= new Stone(700,320,10,10)
stone2= new Stone(720,300,10,10)
stone3= new Stone(600,310,10,10)
stone4= new Stone(620,200,10,10)
stone5= new Stone(640,220,10,10)
iron=new Iron(300,350)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    iron.display();

    
 
}