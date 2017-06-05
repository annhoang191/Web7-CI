var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 1900,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
<<<<<<< e20c7151c48686e193d9cec048b6ab28c3177c07
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL  : {
    jump          : Phaser.Keyboard.SPACEBAR,
    left          : Phaser.Keyboard.LEFT,
    right         : Phaser.Keyboard.RIGHT
=======
  MAX_WIDTH   : 1900,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL    : {
    jump            : Phaser.Keyboard.SPACEBAR,
    left            : Phaser.Keyboard.LEFT,
    right           : Phaser.Keyboard.RIGHT
>>>>>>> 8db159103be28794e1addab114ca58e7c8f15db1
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
<<<<<<< e20c7151c48686e193d9cec048b6ab28c3177c07
  //Gamefefe.game.load.image('background', 'Assets/background.png');
  Gamefefe.game.load.image('background', 'Assets/bg.png');
  Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
  Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
=======

  //Gamefefe.game.load.image('background', 'Assets/bg.png');

  Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
  Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
  //Load sprite
>>>>>>> 8db159103be28794e1addab114ca58e7c8f15db1
  Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
}

/*===============================initialize the game==================*/
var create = function(){
<<<<<<< e20c7151c48686e193d9cec048b6ab28c3177c07

    //Start the Arcade Physics systems

    Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
    Gamefefe.keyboard = Gamefefe.game.input.keyboard;

   Gamefefe.background  = Gamefefe.game.add.tileSprite(0,0, Gamefefe.configs.GAME_WIDTH, Gamefefe.configs.GAME_HEIGHT, 'background');

   //Create Map
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
  //Gamefefe.background.tilePosition.x += 5;
  for(var player of Gamefefe.players){
    player.update();
  }
  //Gamefefe.game.physics.arcade.collide(player1, Gamefefe.layer);
=======
  Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
  Gamefefe.keyboard = Gamefefe.game.input.keyboard;
  //Set background color instead of background image to fix bug
  Gamefefe.game.stage.backgroundColor = '#c6e2ff';
  //Create Map
  Gamefefe.map = Gamefefe.game.add.tilemap('gamemap');
  Gamefefe.map.addTilesetImage('tiles_spritesheet','tiles');
  Gamefefe.layer = Gamefefe.map.createLayer('groundLayer');
  Gamefefe.layer.resizeWorld();
  //Create player
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
>>>>>>> 8db159103be28794e1addab114ca58e7c8f15db1
}
