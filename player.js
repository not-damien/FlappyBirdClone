class player {

  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.gravity = 1
    this.velocityX = 2;
    this.velocityY = 0;
    //todo 
    this.spritesheet = ASSET_MANAGER.getAsset("./pochita pixel boi.png");
    this.BoundingBox = new BoundingBox(this.x, this.y, 62, 47);
    this.timeout = 0;
  };


  update() {
    //todo
    if (this.game.keys[" "] == true) {
      this.velocityY += this.speed;
      ASSET_MANAGER.playAsset("./Pochita Barks.mp3")
    }
    this.updateBox();
    this.collisionCheck();
    this.y = (this.y - this.velocityY) + this.gravity;
    this.x += this.velocityX;
    this.velocityY = 0;
  };

  draw(ctx) {//todo add animation 
    ctx.drawImage(this.spritesheet, this.x, this.y, 62, 47);
    //this.BoundingBox.draw(ctx);
  };

  updateBox() {
    this.BoundingBox = new BoundingBox(this.x, this.y, 62, 47);
  }
  collisionCheck() {
    this.game.entities.forEach(entity => {

        if (this.BoundingBox.collide(entity.BoundingBox)) {
            if (entity instanceof pipe) {
                console.log("this is pipe");
                this.velocityX = 0;
            }
            if(entity instanceof coin){
              this.timeout++;
              if(this.timeout >32){
                console.log("this is coin "+ this.timeout);
                ASSET_MANAGER.playAsset("./coin.mp3")
                //remove coin
                entity.removeFromWorld = true;
                this.timeout = 0;
              }
            }
        }
    });
}

}