var h, min, sec;
var scAngle, hourAngle, minAngle;
var scIn, hIn, minIn;

function setup() {
  createCanvas(800,800);

  scIn = prompt("Enter the color of the second's hand you want: ");
  hIn = prompt("Enter the color of the hour's hand you want: ");
  minIn = prompt("Enter the color of minute's hand you want: ");

}

function draw() {
  background(0, 0, 0); 

  stroke("yellow");
  fill("orange");
  textSize(30)
  text("TICK TOCK", 300, 700)

  h= hour() % 12;
  min = minute();
  sec = second();

  scAngle = map(sec, 0, 60, 0, 360)
  minAngle = map(min, 0,75, 0, 360)
  hourAngle = map(h, 0, 75, 0, 360)

  console.log(hourAngle)

  //hours

  push();
  angleMode(DEGREES);
  translate(400, 300);
  rotate(hourAngle)
  stroke(hIn);
  strokeWeight(7);
  line(0, 0, 30, -60)
  pop();

  //minutes
  push();
  angleMode(DEGREES);
  translate(400, 300);
  rotate(minAngle)
  stroke(minIn);
  strokeWeight(7); 
  line(0, 0, 30, -130)
  pop();

  //seconds
  push();
  angleMode(DEGREES);
  translate(400, 300);
  rotate(scAngle);
  stroke(scIn);
  strokeWeight(7);  
  line(0, 0, 0, -150)
  pop();


  //arcs

  //second arc
  push();
  stroke(scIn);
  strokeWeight(10);  
  noFill();
  arc(400, 300, 430, 430, 270, scAngle + 270);
  pop();

  //minute arc
  push();
  stroke(minIn);
  strokeWeight(10);  
  noFill();
  arc(400, 300, 400, 400, 270, minAngle + 285);
  pop();

  //hour arc
  push();
  stroke(hIn);
  strokeWeight(10);  
  noFill();
  arc(400, 300, 370, 370, 270, hourAngle + 292.5);
  pop();



  drawSprites();
}