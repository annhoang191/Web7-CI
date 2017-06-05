class FlyController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super();
        this.sprite=Gamefefe.game.add.sprite(x,y,spriteName);
        var fly = this.sprite.animations.add('fly');
        this.sprite.animations.play('fly', 10, true);
        this.x=x;
        this.y=y;


    }

    update(){
        if (Gamefefe.moveRight.fly){
            this.sprite.position.x+=3;
            if (this.sprite.position.x-this.x>200 ){
                Gamefefe.moveRight.fly=false;
            }
        }
            if(!Gamefefe.moveRight.fly){
                this.sprite.position.x-=3;
                if(this.sprite.position.x-this.x<-200){
                Gamefefe.moveRight.fly=true;
                }
            }
         Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
    }
}
