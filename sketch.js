var s;

var candyX = 0;
var candyY = 0;
var score = 0;
var speed = 0.75;
var tail = 1;



function Snake() {
  this.snakeTail = new Array(1);
  this.snakeTail[0] = new Array(2);
  this.snakeTail[0][0] = 10;
  this.snakeTail[0][1] = 10;
  this.xspeed = 0;
  this.yspeed = 0;




this.checkForCollision =function(){
if (candyX < this.snakeTail[0][0]  + 10 &&
   candyX + 10 > this.snakeTail[0][0]  &&
   candyY < this.snakeTail[0][1]  + 10 &&
   10 + candyY > this.snakeTail[0][1] ) {
    console.log("collision");
    score++;
    speed += 0.25;
    generateNewCandy();
  }
}


  this.update = function() {
    this.snakeTail[0][0]  = this.snakeTail[0][0]  + this.xspeed;
    this.snakeTail[0][1]  = this.snakeTail[0][1]  + this.yspeed;


      this.checkForCollision();
      if(this.snakeTail[0][0]  < 1){
       this.snakeTail[0][0]  = 1;
      }else if(this.snakeTail[0][0] >= 585){
        location.reload()}

      if(this.snakeTail[0][1]  < 1){
       this.snakeTail[0][1]  = 1;
      }else if(this.snakeTail[0][1] >= 585){
        location.reload()}

      if(this.snakeTail[0][0]  > 585){
       this.snakeTail[0][0]  = 585;
      }else if(this.snakeTail[0][0] <= 1){
        location.reload()}

      if(this.snakeTail[0][1]  > 585){
       this.snakeTail[0][1]  = 585;
      }else if(this.snakeTail[0][1] <= 1){
        location.reload()}

  }




// filling in the values =>

//if (5 < 30 &&
  //  55 > 20 &&
   // 5 < 20 &&
   // 55 > 10) {
    // collision detected!
//}




  this.show = function() {
   fill(255);
  rect(this.snakeTail[0][0] , this.snakeTail[0][1] ,10,10);
  rect(candyX, candyY, 10, 10)
  console.log(" x= " + this.snakeTail[0][0]  + " y= " + this.snakeTail[0][1]  + " candyX= " + candyX + " candyY= " + candyY);

  }

    this.dir = function (dir_x, dir_y)
  {
      if(dir_x === 0 && dir_y ===-1) //up
      {
       this.xspeed = 0;
       this.yspeed = -speed;
      }

      if(dir_x === 0 && dir_y === 1)  //down
      {
       this.xspeed = 0;
       this.yspeed = speed;
      }

      if(dir_x === -1 && dir_y === 0) //left
      {
       this.xspeed = -speed;
       this.yspeed = 0;
      }

      if(dir_x === 1 && dir_y === 0)  //right
      {
       this.xspeed = speed;
       this.yspeed = 0;
      }

  }

}



function generateNewCandy()
  {

    var max = 570;
    var min = 30;
    candyX = Math.random() * (max - min) + min;
    candyY = Math.random() * (max - min) + min;

  }



function setup() {
  createCanvas(600,600);
  s = new Snake();
  generateNewCandy();
}

function draw() {
  background(51);
  s.update();
  s.show();
}

function keyPressed(){
 if (keyCode === UP_ARROW){
   s.dir(0,-1);
 } else if (keyCode === DOWN_ARROW) {
  s.dir(0,1);
 } else if (keyCode === RIGHT_ARROW) {
  s.dir(1,0);
 } else if (keyCode === LEFT_ARROW) {
  s.dir(-1,0);
 }
}