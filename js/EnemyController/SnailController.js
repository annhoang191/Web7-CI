class SnailController {
    constructor(x,y,spriteName,configs){
        //super(x,y,spriteName,configs);
        this.sprite = Gamefefe.enemyGroup.create(x, y, spriteName);
        this.sprite.animations.add(spriteName,[1,2],2, true);
        this.sprite.animations.play(spriteName);
        //this.sprite.animations.currentAnim.setFrame();
        this.x=x;
        this.y=y;
        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 500;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.moveRight.crawl){
            this.sprite.position.x+=1;
            if (this.sprite.position.x-this.x>100 ){
                Gamefefe.moveRight.crawl=false;
            }
        }
            if(!Gamefefe.moveRight.crawl){
                this.sprite.position.x-=1;
                if(this.sprite.position.x-this.x<-100){
                Gamefefe.moveRight.crawl=true;
                }
            }
    }
}
