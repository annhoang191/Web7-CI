class PlayerController{
  constructor(x, y, spriteName,configs){
    //this.sprite = Gamefefe.game.add.sprite(x, y,spriteName);
    this.sprite = Gamefefe.playerGroup.create(x, y, spriteName);
    this.configs = configs;
    Gamefefe.game.physics.arcade.enable(this.sprite);
    this.sprite.animations.add('walk');
    //this.sprite.animations.add('hurt');
    this.sprite.animations.play('walk',25,true);
    Gamefefe.game.camera.follow(this.sprite);
    this.sprite.body.bounce.y = 0;
    this.sprite.body.gravity.y = 2000;
    this.sprite.body.collideWorldBounds = true;
    this.timeSinceLastJump=0;
    this.timeSinceLastMove=0;
    this.sprite.Health = Gamefefe.configs.player_Health;
  }

  update(){
      Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
      this.timeSinceLastJump += Gamefefe.game.time.physicsElapsed;
      this.timeSinceLastMove+=Gamefefe.game.time.physicsElapsed;

      if(Gamefefe.keyboard.isDown(Phaser.Keyboard.F)){
          console.log(this.sprite.body.x,this.sprite.body.y);
      }
      if(Gamefefe.keyboard.isDown(this.configs.jump)
          && this.sprite.body.onFloor() && Gamefefe.game.time.now > this.timeSinceLastJump
        ){
          this.sprite.body.velocity.y=-900;
          this.timeSinceLastJump = 250 + Gamefefe.game.time.now;
      }
      if(Gamefefe.keyboard.isDown(this.configs.right)
          && this.timeSinceLastMove > 0.005
        ){
          this.sprite.x+=8;
          this.timeSinceLastMove = 0;
      }
    else if(Gamefefe.keyboard.isDown(this.configs.left)
         && this.timeSinceLastMove > 0.005
      ){
        this.sprite.x-=8;
      this.timeSinceLastMove = 0;
    }
    else{
         this.sprite.body.velocity.x = 0;
    }
  }

}