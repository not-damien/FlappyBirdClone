class pipe {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spritesheet = ASSET_MANAGER.getAsset("./chainsawAni.png");
        this.BoundingBox = new BoundingBox(this.x, this.y, 50, 500);
        this.animation =  new Animator(this.spritesheet, 0, 0, 50, 500, 2, .1, 0, false, true);
                                                    //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
    };
    update() {

    };
    draw(ctx) {
        //ctx.drawImage(this.spritesheet, this.x, this.y, 50, 500);
        this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,1);
       // this.BoundingBox.draw(ctx);
        
    };
    updateBox() {
        
        this.BoundingBox = new BoundingBox(this.x, this.y +5, 50, 490);
        
    }



}