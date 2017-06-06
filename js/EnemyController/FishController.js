class FishController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
    }

    update(){
        if (Gamefefe.moveRight.swim){
            this.sprite.position.x+=3;
            if (this.sprite.position.x-this.x>200){
                Gamefefe.moveRight.swim=false;
            }
        }
            if(!Gamefefe.moveRight.swim){
                this.sprite.position.x-=3;
                if(this.sprite.position.x-this.x<-200){
                Gamefefe.moveRight.swim=true;
                }
            }

    }
    }
