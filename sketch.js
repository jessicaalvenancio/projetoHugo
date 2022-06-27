var nave1,nave2;
var obstacle1,obstacle2;
var fuel,life;
var star;
var nave1Img,obstacle1Img,obstacle2Img;
var starImg,fuelImg;
var backgroundImg;
var edges;


function preload() {
nave1Img = loadImage("imagens/nave.png");
obstacle1Img = loadImage("imagens/meteoro.png");
obstacle2Img = loadImage("imagens/satelite.png");
starImg = loadImage("imagens/estrela.png");
fuelImg = loadImage("imagens/gasolina.png");
backgroundImg = loadImage("imagens/background.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();

  nave1 = createSprite(650,580,20,20);
  nave1.addImage("nave1",nave1Img)
  nave1.scale = 0.17;
}

function draw() {
 background("red");
 image(backgroundImg,0,0,width,height);

if(keyIsDown(UP_ARROW)){
    nave1.position.y -=5;
}

if(keyIsDown(RIGHT_ARROW)){
    nave1.position.x +=5;

}if(keyIsDown(LEFT_ARROW)){
    nave1.position.x -=5;
}

nave1.bounceOff(edges);

 drawSprites();
}
function spawnObstacles() {
 //criar o srpite dos obstáculos
 //gerar obstáulos aleatórios   
}