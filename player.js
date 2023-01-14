constructor(game,x,y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.gravity = 1
        this.velocityX = 0;
        this.velocityY = 0;
        //todo 
        //this.spritesheet = ASSET_MANAGER.getAsset("./assets/FlappyDog.png");
    };


update() {
  //todo
   if(this.game.keys["Space"] == true){
     this.velocityY += speed;
   }
  this.y = (this.y - this.velocityY) + this.gravity;
  this.velocityY = 0;
}

 draw(ctx){//todo add animation 
        ctx.drawImage(this.spritesheet, this.x, this.y,54,22);
    };
