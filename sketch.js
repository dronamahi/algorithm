var mrectangle
var frectangle
function setup() {
  createCanvas(800,400);
  mrectangle = createSprite(400, 200, 50, 50);
mrectangle.shapeColor = "red"
frectangle = createSprite(440, 200, 50, 50);
frectangle.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  mrectangle.x = mouseX
  mrectangle.y = mouseY
  if(mrectangle.x-frectangle.x<=mrectangle.width/2+frectangle.width/2&&
    frectangle.x-mrectangle.x<=mrectangle.width/2+frectangle.width/2&&
    mrectangle.y-frectangle.y<=mrectangle.height/2+frectangle.height/2&&
    frectangle.y-mrectangle.y<=mrectangle.height/2+frectangle.height/2
    ){
mrectangle.shapeColor = "blue"
frectangle.shapeColor = "blue"
  }
  else{
    mrectangle.shapeColor = "red"
    frectangle.shapeColor = "red"
  }

  drawSprites();
  
}