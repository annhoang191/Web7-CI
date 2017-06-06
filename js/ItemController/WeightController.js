class WeightController{
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.enemyGroup.create(x, y, spriteName);
        Gamefefe.game.physics.arcade.enable(this.sprite);

    }
    playerComing(x){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (x == this.sprite.body.x-50){
            this.sprite.body.gravity.y = 1400;
            this.sprite.body.bounce.y = 0.6;
        }

    }
}
