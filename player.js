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
  };


  update() {
    //todo
    if (this.game.keys[" "] == true) {
      this.velocityY += this.speed;
      ASSET_MANAGER.playAsset("./Pochita Barks.mp3")
    }
    this.y = (this.y - this.velocityY) + this.gravity;
    this.x += this.velocityX;
    this.velocityY = 0;
  };

  draw(ctx) {//todo add animation 
    ctx.drawImage(this.spritesheet, this.x, this.y, 62, 47);
  };

  updateBox() {
    this.BoundingBox = new BoundingBox(this.x, this.y, 62, 47);
  }

}