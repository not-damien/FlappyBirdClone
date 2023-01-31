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
    this.points = 0;
    this.dead = false;
  };


  update() {
    //todo
    if (this.game.keys[" "] == true) {
      this.velocityY += this.speed;
      ASSET_MANAGER.playAsset("./Pochita Barks.mp3")
      if(this.dead){
        location.reload();
      }
    }
    this.updateBox();
    this.collisionCheck();
    this.y = (this.y - this.velocityY) + this.gravity;
    this.x += this.velocityX;
    this.velocityY = 0;
    if(this.points == 1){
      ASSET_MANAGER.playAsset("./kickbackLofi.mp3");
    }
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
                this.gravity = 100
                this.dead = true;
            }
            if(entity instanceof coin){
                ASSET_MANAGER.playAsset("./coin.mp3")
                //remove coin
                entity.removeFromWorld = true;
                this.points++
                console.log(this.points)
            }
        }
    });
}

}