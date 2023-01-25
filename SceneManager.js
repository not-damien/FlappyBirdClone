class SceneManager{
    

    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.score = 0;

        this.playerCharacter = new player(this.game,-60, 0);
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
        this.game.addEntity(new pipe(this.game,500,400))
        this.game.addEntity(new pipe(this.game,600,400))
        this.game.addEntity(new pipe(this.game,700,400))
        this.game.addEntity(new pipe(this.game,800,400))
        this.game.addEntity(new pipe(this.game,900,400))
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
       
    };

};