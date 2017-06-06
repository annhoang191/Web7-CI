var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 700,
  GAME_SCORE  : 0,
  PLAYER_CONTROL  : {
    lives         : 3,
    jump          : Phaser.Keyboard.SPACEBAR,
    left          : Phaser.Keyboard.LEFT,
    right         : Phaser.Keyboard.RIGHT
  }
};
Gamefefe.moveRight={};
Gamefefe.moveRight.fly=true;

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
  //Load audio
  Gamefefe.game.load.audio('theme', ['Assets/Audio/main_theme.mp3', 'Assets/Audio/main_theme.ogg']);
  /*Cac anh chi em load them sfx nhe, mot file audio nhung co 2 format la mp3 va ogg*/

  //Load image and sprite
  Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/mapbeta.json', null, Phaser.Tilemap.TILED_JSON);
  Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
  Gamefefe.game.load.image('coins', 'Assets/Items/coinGold.png');
  Gamefefe.game.load.image('spikes', 'Assets/Items/spikes.png');
  Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
  Gamefefe.game.load.spritesheet('fly', 'Assets/Enemies/flyFly0.png', 74, 34);
}

/*===============================initialize the game==================*/
var create = function(){
   Gamefefe.music = Gamefefe.game.add.audio('theme');
   Gamefefe.music.loopFull();
   Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
   Gamefefe.keyboard = Gamefefe.game.input.keyboard;

   Gamefefe.game.stage.backgroundColor = '#c6e2ff';
   //Create Map
   Gamefefe.map = Gamefefe.game.add.tilemap('gamemap');
   Gamefefe.map.addTilesetImage('tiles_spritesheet','tiles');
   Gamefefe.backgroundLayer = Gamefefe.map.createLayer('backgroundLayer');
   Gamefefe.groundLayer = Gamefefe.map.createLayer('groundLayer');
   Gamefefe.map.setCollisionBetween(1, 1000, true, 'groundLayer');
   Gamefefe.groundLayer.resizeWorld();
   //Display score text
   var text = 'score:';
   Gamefefe.note = Gamefefe.game.add.text(10, 10, '', {
    font: 'bold 40pt Arial',
    fill : 'white',
    stroke : 'black',
    strokeThickness : 4
  });
  Gamefefe.note.setText(text);
  Gamefefe.note.fixedToCamera = true;

   //Create player - enemies - traps
   Gamefefe.players =[];
   Gamefefe.enemies =[];
   Gamefefe.traps   =[];
   //Create player
   Gamefefe.players.push(
       new PlayerController(0,0,'player1Walk',Gamefefe.configs.PLAYER_CONTROL)
   );
    Gamefefe.cursors = Gamefefe.game.input.keyboard.createCursorKeys();
    Gamefefe.enemies.push(new FlyController(600,350,'fly'));
}
/*==================Update game state each frame==================*/
var update = function(){
  //update player
  for(var player of Gamefefe.players){
    player.update();
  }
  for (var enemy of Gamefefe.enemies){
      enemy.update();
  }
}
