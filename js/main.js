var Gamefefe = {};

Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1277,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1277
};

window.onload = function(){
   Gamefefe.game = new Phaser.Game(	Gamefefe.configs.GAME_WIDTH, 
   									Gamefefe.configs.GAME_HEIGHT,
       								Phaser.AUTO, '', {}, false, false);
    Gamefefe.game.state.add('boot', bootState);
    Gamefefe.game.state.add('load', loadState);
    Gamefefe.game.state.add('menu', menuState);
    Gamefefe.game.state.add('map1', map1State);
    Gamefefe.game.state.add('map2', map2State);
    Gamefefe.game.state.add('win', winState);
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

