class FlyController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);



    }

    update(){
        if (Gamefefe.moveRight.fly){
            this.sprite.position.x+=3;
            if (this.sprite.position.x-this.x>400 ){
                Gamefefe.moveRight.fly=false;
            }
        }
            if(!Gamefefe.moveRight.fly){
                this.sprite.position.x-=3;
                if(this.sprite.position.x-this.x<-400){
                Gamefefe.moveRight.fly=true;
                }
            }

    }
}
