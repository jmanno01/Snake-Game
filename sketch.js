var snakePlayer;

var candyX = 0;
var candyY = 0;
var score = 0;
var speed = 0.75;
var tail = 1;

function Snake() {
	this.snakeTail = [];
	this.xspeed = 0;
	this.yspeed = 0;
	this.snakeTail.push(generateCell(10, 10, null, 0));

	this.generateCellManager = function (sibling, id){
		//TODO find a way to create next cell by checking the speed of the sibling *
		return generateCell(sibling.xPos-5, sibling.yPos, sibling, id)
	}
	  
	  
	function generateCell(x, y, sibling, id){
		
		var cellObj = {"xPos":x, "yPos":y, "sibling":sibling, "id":id+1};
		cellObj.sibling = sibling;
		console.log("id" + id+ + "\t"+cellObj.xPos + "\t" + cellObj.yPos);
		return cellObj;
	}


	this.checkForCollision =function(){
	if (candyX < this.snakeTail[0].xPos  + 10 &&
	    candyX + 10 > this.snakeTail[0].xPos  &&
	    candyY < this.snakeTail[0].yPos  + 10 &&
	    10 + candyY > this.snakeTail[0].yPos ) {
		console.log("collision");
		score++;
		speed += 0.25;
		// TODO
		this.snakeTail.push(this.generateCellManager(this.snakeTail[this.snakeTail.length-1], this.snakeTail.length));
	  }
	}

	this.update = function() {
		//this.snakeTail[0].xPos += this.xspeed;
		//this.snakeTail[0].yPos += this.yspeed;
		for(var i = 0; i < this.snakeTail.length; ++i){
			this.snakeTail[i].xPos += this.xspeed;
			this.snakeTail[i].yPos += this.yspeed;
		}

		this.checkForCollision();
			if(this.snakeTail[0].xPos  < 1){
		this.snakeTail[0].xPos  = 1;
		}else if(this.snakeTail[0].xPos >= 585){
			location.reload()}

		if(this.snakeTail[0].yPos  < 1){
			this.snakeTail[0].yPos  = 1;
		}else if(this.snakeTail[0].yPos >= 585){
			location.reload()}

		if(this.snakeTail[0].xPos  > 585){
			this.snakeTail[0].xPos  = 585;
		}else if(this.snakeTail[0].xPos <= 1){
			location.reload()}

		if(this.snakeTail[0].yPos  > 585){
			this.snakeTail[0].yPos  = 585;
		}else if(this.snakeTail[0].yPos <= 1){
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
	  for(var i = 0; i < this.snakeTail.length; ++i){
		  rect(this.snakeTail[i].xPos , this.snakeTail[i].yPos ,10,10);
		  //console.log(" id "+ this.snakeTail[i].id  + "\tx= " + this.snakeTail[i].xPos  + "\ty= " + this.snakeTail[i].yPos);
	  }
	  rect(candyX, candyY, 10, 10)
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
    //candyX = Math.random() * (max - min) + min;
    //candyY = Math.random() * (max - min) + min;
	candyX = 30;
	candyY = 10;
  }

function setup() {
  createCanvas(600,600);
  snakePlayer = new Snake();
  generateNewCandy();
}

function draw() {
  background(51);
  snakePlayer.update();
  snakePlayer.show();
}

function keyPressed(){
 if (keyCode === UP_ARROW){
   snakePlayer.dir(0,-1);
 } else if (keyCode === DOWN_ARROW) {
  snakePlayer.dir(0,1);
 } else if (keyCode === RIGHT_ARROW) {
  snakePlayer.dir(1,0);
 } else if (keyCode === LEFT_ARROW) {
  snakePlayer.dir(-1,0);
 }
}