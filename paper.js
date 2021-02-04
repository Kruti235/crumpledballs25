class Paperball{
    constructor(x, y, radius) {
        var options = {
            'isStatic' :false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("paper.png")
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        this.body.debug=true;
        push();
        translate(pos.x,pos.y)
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
}