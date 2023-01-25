class coin {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spritesheet = ASSET_MANAGER.getAsset("./pipe.png");
        this.BoundingBox = new BoundingBox(this.x, this.y, 5, 100);
    };
    update() {

    };
    draw(ctx) {
        this.BoundingBox.draw(ctx);
        
    };
    updateBox() {
        
        this.BoundingBox = new BoundingBox(this.x, this.y, 5, 100);
        
    }



}