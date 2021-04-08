const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground1;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,100,70,70);

    box2 = new Box(1040, 100, 70, 70);

    box3 = new Box(900,40,70,70);

    box4 = new Box(1040, 40, 70, 70);

    box5 = new Box(960,20,70,70);

    ground1 = new ground(600, 400, 1200, 50);

    pig1 = new pig(970,100);

    pig2 = new pig(970,40);

    log1 = new log(950,50,300,PI/2);

    log2 = new log(950,30,300,PI/2);

    log3 = new log(940,20,150,PI/7);

    log4 = new log(980,20,150,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    //box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    //log3.display();
    //log4.display();
}