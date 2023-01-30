class coin {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spritesheet = ASSET_MANAGER.getAsset("./bread.png")
        this.BoundingBox = new BoundingBox(this.x+ 15, this.y, 100, 75);
        this.animation =  new Animator(this.spritesheet, 0, 0, 100, 75, 7, 1, 0, false, true);
                                                    //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
    };
    update() {

    };
    draw(ctx) {
        //this.BoundingBox.draw(ctx);
        this.animation.drawFrame(this.game.clockTick,ctx,this.x -25,this.y+ 7,1);
    };
    updateBox() {
        
        this.BoundingBox = new BoundingBox(this.x +15, this.y, 5, 100);
        
    }



}