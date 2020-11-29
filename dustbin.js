class Dustbin
{
 constructor(x, y, width, height)
 {
   // declare options
   var options = 
   {
      isStatic: true
   }
   // make rectangle body
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
   this.height = height;
   // add to world
   World.add(world, this.body);
 }
 display()
 {
 }
}