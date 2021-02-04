class Dustbin {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight = 100;
      this.wallthickness = 20;
      this.angle = 0;
      this.image = loadImage("dustbingreen.png")

      this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthickness,{isStatic:true});

      this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
      Matter.Body.setAngle(this.leftWallBody,this.angle);

      this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
      Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
      
      World.add(world, this.bottomBody);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);

    }
    display(){
      var posB =this.bottomBody.position;
      var posL =this.leftWallBody.position;
      var posR = this.rightWallBody.position;
      
      push();
      translate(posL.x,posL.y);
      imageMode(CENTER);
      angleMode(RADIANS);
      fill(255);
      stroke(255);
      rotate(this.angle);
     // image(this.image,0,0,this.x,this.y);
      pop();
  
      push();
      translate(posR.x,posR.y);
       imageMode(CENTER);
      angleMode(RADIANS);
      fill(255);
      stroke(255);
      rotate(-1*this.angle);
      //image(this.image,0,0,this.x,this.y);
      pop();

      push();
      translate(posB.x,posB.y);
       imageMode(CENTER);
   
      image(this.image,0,0,this.dustbinWidth,300);
      pop();
    }
  };
