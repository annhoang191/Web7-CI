var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 1900,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 1900,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL  : {
    jump          : Phaser.Keyboard.SPACEBAR,
    left          : Phaser.Keyboard.LEFT,
    right         : Phaser.Keyboard.RIGHT
  }
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

  Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
  Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
  //Load sprite
  Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
}

/*===============================initialize the game==================*/
var create = function(){
    //Start the Arcade Physics systems

   Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
   Gamefefe.keyboard = Gamefefe.game.input.keyboard;
   //set background color instead of background image to fix bug
   Gamefefe.game.stage.backgroundColor = '#c6e2ff';
   //create Map
   Gamefefe.map = Gamefefe.game.add.tilemap('gamemap');
   Gamefefe.map.addTilesetImage('tiles_spritesheet','tiles');
   Gamefefe.layer = Gamefefe.map.createLayer(0);
   Gamefefe.layer.resizeWorld();

   Gamefefe.players =[];
   Gamefefe.players.push(
       new PlayerController(0,0,'player1Walk',Gamefefe.configs.PLAYER_CONTROL)
   );
    Gamefefe.cursors = Gamefefe.game.input.keyboard.createCursorKeys();
}
/*==================Update game state each frame==================*/
var update = function(){
  for(var player of Gamefefe.players){
    Gamefefe.game.physics.arcade.collide(Gamefefe.player, Gamefefe.layer);
    player.update();
  }
}
