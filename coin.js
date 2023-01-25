class coin {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spritesheet = ASSET_MANAGER.getAsset("./coin.png")
        this.BoundingBox = new BoundingBox(this.x, this.y, 5, 100);
        this.animation =  new Animator(this.spritesheet, 0, 0, 191, 171, 6, 1, 0, false, true);
                                                    //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
    };
    update() {

    };
    draw(ctx) {
        //this.BoundingBox.draw(ctx);
        this.animation.drawFrame(this.game.clockTick,ctx,this.x-40,this.y+5,.4);
    };
    updateBox() {
        
        this.BoundingBox = new BoundingBox(this.x, this.y, 5, 100);
        
    }



}