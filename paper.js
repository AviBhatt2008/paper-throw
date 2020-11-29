class Paper
{
 constructor(x, y)
 {
   // declare options
   var options = 
   {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
   }
   // make circle body with options
   this.body = Bodies.circle(x, y, 20, options);
   // load image
   this.image = loadImage("images/paper.png");
   // add body to world
   World.add(world, this.body);
 }
 display()
 { 
  push()
  // update body's positions
  translate(this.body.position.x, this.body.position.y);
  // give image
  imageMode(CENTER);
  image(this.image, 0, 0, 50, 50);
  pop()
 }
}