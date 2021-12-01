var retmovendo, retfixa;
function setup() {
  createCanvas(1200,800);
  retmovendo = createSprite(100,100,50,50)
  retfixa = createSprite(600,400,50,50);
  
}

function draw() {
  background(0,0,0);  
  retmovendo.x = mouseX;
  retmovendo.y = mouseY;

  
  if(retmovendo.x-retfixa.x < retmovendo.width/2+retfixa.width/2&&retfixa.y-retmovendo.y < retmovendo.height/2+retfixa.height/2)
  {
    retmovendo.shapeColor = "red";
    retfixa.shapeColor = "red";
  }
  else{
    retmovendo.shapeColor = "green";
    retfixa.shapeColor = "green";
  }
  drawSprites();
}

