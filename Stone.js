class Stone 
 {
constructor(x, y , width , height) 
 { 
 var options =
{
  'restitution':0.8,
        'friction':0.9,
        'density':12
};
  this.bodyX = x;
 this.bodyY = y;
  this.bodyH = 50;
 this.bodyW = 50;
this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyH, this.bodyW, options); 
World.add(world , this.body);
 }
  display()
  { 

push(); 
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("black");
fill("black");
rect(0, 0, this.width, this.height);
 pop();
 }
 };