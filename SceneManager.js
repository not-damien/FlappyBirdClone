class SceneManager{
    

    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.score = 0;

        this.playerCharacter = new player(this.game,-60, 400);
        this.elapsedTime = 0;
      //  this.loadLevel(levelOne, 50,550);
        this.loadLevel();
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
    loadLevel(){
    
        this.game.addEntity(this.playerCharacter);
        for(let i = 500; i < 10000;i += 200){
            let offset = Math.floor(Math.random() * 100)
            this.game.addEntity(new pipe(this.game,i,400 + offset ))
            this.game.addEntity(new coin(this.game,i+ 30, 300 + offset))
            this.game.addEntity(new pipe(this.game,i, -200 + offset ))
        }
    };



    update() {
        let midpoint = 200;
        this.elapsedTime += this.game.clockTick;
        if(this.playerCharacter.x<midpoint){
            if(this.playerCharacter.x<=50){
                this.playerCharacter.x=50;
                for(let i=1; i<this.game.entities.length; i++ ){
                this.game.entities[i].x -= this.playerCharacter.velocityX;
                this.game.entities[i].updateBox();
                }
                
            }
        //this.floor1.x=this.playerCharacter.x;
        
        }else{
            this.playerCharacter.x=midpoint;
            
            for(let i=1; i<this.game.entities.length; i++ ){
                this.game.entities[i].x -= this.playerCharacter.velocityX;
                this.game.entities[i].updateBox();
                }
        }

    };

    draw(ctx){
        ctx.fillStyle = "White";
        ctx.font = "bold 48px serif";
        ctx.textAlign = 'center';
        ctx.fillText(this.playerCharacter.points, 240, 150);
        if(this.playerCharacter.dead){
            ctx.fillStyle = "red"
            ctx.fillText("You Lose",240,200)
            ctx.font = "bold 30px serif";
            ctx.fillText("Press Space To try Again",240,300)   
        }
    };

};