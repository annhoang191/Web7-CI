class SlimeController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 500;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.moveRight.walk){
            this.sprite.position.x+=4;
            if (this.sprite.position.x-this.x>200 ){
                Gamefefe.moveRight.walk=false;
            }
        }
            if(!Gamefefe.moveRight.walk){
                this.sprite.position.x-=3;
                if(this.sprite.position.x-this.x<-200){
                Gamefefe.moveRight.walk=true;
                }
            }
    }
}
