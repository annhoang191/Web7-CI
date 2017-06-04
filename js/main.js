var Gamefefe = {};

Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1277,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1277,
};

window.onload = function(){
  Gamefefe.game = new Phaser.Game(Gamefefe.configs.GAME_WIDTH, Gamefefe.configs.GAME_HEIGHT,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

/*==================preparations before game starts==================*/
var preload = function(){
	
}
/*===============================initialize the game==================*/
var create = function(){

}
/*==================Update game state each frame==================*/
var update = function(){

}

