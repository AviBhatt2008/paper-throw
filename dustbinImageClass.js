class DustbinImage extends Dustbin {
    constructor(x, y, width, height)
    {
        // super dustbin class
        super(x, y, width, height);
        // load image
        this.image = loadImage("images/greenDustbin.png");
    }
    display()
    {
        // super display
        super.display();
        // give image
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y - 115, 250, 250);
    }
}