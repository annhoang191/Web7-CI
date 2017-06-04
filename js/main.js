var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1032,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1400
};

window.onload = function(){
  Gamefefe.game = new Phaser.Game(Gamefefe.configs.GAME_WIDTH,Gamefefe.configs.GAME_HEIGHT,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update
    }, false, false
  );
}

/*==================preparations before game starts==================*/
var preload = function(){
  Gamefefe.game.scale.minWidth = Gamefefe.configs.MIN_WIDTH;
  Gamefefe.game.scale.minHeight = Gamefefe.configs.MIN_HEIGHT;
  Gamefefe.game.scale.maxWidth = Gamefefe.configs.MAX_WIDTH;
  Gamefefe.game.scale.maxHeight = Gamefefe.configs.MAX_HEIGHT;
  Gamefefe.game.scale.pageAlignHorizontally = true;
  Gamefefe.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Gamefefe.game.time.advancedTiming = true;

  Gamefefe.game.load.image('background', 'Assets/bg.png');
}
/*===============================initialize the game==================*/
var create = function(){
	Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
  Gamefefe.keyboard = Gamefefe.game.input.keyboard;

  Gamefefe.background  = Gamefefe.game.add.tileSprite(0,0, Gamefefe.configs.GAME_WIDTH, Gamefefe.configs.GAME_HEIGHT, 'background');

  //Create Map
}
/*==================Update game state each frame==================*/
var update = function(){

}
