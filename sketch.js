const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var scubaDiver, scubaDiver_img;
var background_img;
var pathar, pathar_img;
var spaceship, spaceship_img, spaceshipCrashed, spaceshipCrashed_img;
var lifepod, lifepod_img;
var leviathan1, leviathan2, leviathan3, leviathan1_img, leviathan2_img, leviathan3_img;

function preload(){
    scubaDiver_img = loadImage("scubaDiver.png");
    background_img = loadImage("background.png");
    pathar_img = loadImage("pathar.png");
    spaceship_img = loadImage("spaceship.png");
    spaceshipCrashed_img = loadImage("spaceship crashed.png");
    lifepod_img = loadImage("lifepod.png");
    leviathan1_img = loadImage("levithan 1.png");
    leviathan2_img = loadImage("Levithan 2.png");
    leviathan3_img = loadImage("leviathan 3.png");
}

function setup(){
    var canvas = createCanvas(1000,1000);
    
    scubaDiver = createSprite(500,100,10,10);
    scubaDiver.addImage(scubaDiver_img);

    pathar = createSprite(200,200,10,10);
    pathar.addImage(pathar_img);

    spaceship = createSprite(100,50,10,10);
    spaceship.addImage(spaceship_img);

    spaceshipCrashed = createSprite(200,100,10,10);
    spaceshipCrashed.addImage(spaceshipCrashed_img);

    lifepod = createSprite(700,100,10,10);
    lifepod.addImage(lifepod_img);

    leviathan1 =createSprite(200,800,10,10);
    leviathan1.addImage(leviathan1_img);

    leviathan2 = createSprite(200,700,10,10);
    leviathan2.addImage(leviathan2_img);

    leviathan3 = createSprite(200,600,10,10);
    leviathan3.addImage(leviathan3_img);
}

function draw(){
    background(background_img);

    drawSprites();
}