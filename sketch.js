let snake;
let scl =20;
let food;

function setup() {
  // let canvas = createCanvas(windowWidth, windowHeight);

  const container = document.getElementById('canvas-container');

  let borderLeftRight = windowWidth%scl
  let borderTopBottom = windowHeight%scl
  let canvaswidth = windowWidth-borderLeftRight;
  let cavnasHeight = windowHeight-borderTopBottom;

 const styles = {
  margin:"0",
  padding:"0",  
  "box-sizing": "border-box",
  width:`${windowWidth}px`,
  height:`${windowHeight}px`,
  display:"flex",
  justifyContent:`center`,
  alignItems:`center`,
  border:"solid black",
  "border-width" :`${borderTopBottom}px ${borderLeftRight}px`,
  "border-color" : "black",
  };

  Object.assign(container.style, styles);
  let canvas = createCanvas(canvaswidth, cavnasHeight);

  canvas.parent("canvas-container");
  snake = new Snake();
  frameRate(8);
  food = createVector(random(width), random(height));
  pickLocation();
}

function pickLocation() {
let cols = floor(width/scl);
let rows = floor(height/scl);
food = createVector(floor(random(cols)), floor(random(rows)));
food.mult(scl)
}

function draw() {
  background(51)
  snake.death();
  snake.update();
  snake.show();
  if(snake.eat(food)){
    
     pickLocation();
  }

  fill(255,0,100)
  rect(food.x,food.y,scl,scl);
  
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    snake.dir(0,-1);
  }else if(keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  }else if(keyCode ===RIGHT_ARROW){
    snake.dir(1,0)
  }else if(keyCode ===LEFT_ARROW){
    snake.dir(-1,0)
  }
}
