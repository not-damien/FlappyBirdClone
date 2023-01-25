class pipe {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spritesheet = ASSET_MANAGER.getAsset("./pipe.png");
        this.BoundingBox = new BoundingBox(this.x, this.y, 50, 100);
    };
    update() {

    };
    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.y, 50, 500);
       // this.BoundingBox.draw(ctx);
        
    };
    updateBox() {
        
        this.BoundingBox = new BoundingBox(this.x, this.y, 50, 500);
        
    }



}