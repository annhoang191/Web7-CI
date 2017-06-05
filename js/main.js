var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL  : {
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
  //Gamefefe.game.load.image('background', 'Assets/bg.png');
 Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/map11.json', null, Phaser.Tilemap.TILED_JSON);
 Gamefefe.game.load.image('tiles', 'Assets/Maps/tile1.png');
 Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
  Gamefefe.game.load.spritesheet('fly', 'Assets/Enemies/flyFly0.png', 74, 34);
  //Gamefefe.game.load.atlasJSONHash('fly', 'Assets/Enemies/flyFly.png', 'Assets/Enemies/enemies_spritesheet.txt');

}
var map;
var layer;

/*===============================initialize the game==================*/
var create = function(){

    //Start the Arcade Physics systems

    Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
    Gamefefe.keyboard = Gamefefe.game.input.keyboard;

   //Gamefefe.background  = Gamefefe.game.add.tileSprite(0,0, Gamefefe.configs.GAME_WIDTH, Gamefefe.configs.GAME_HEIGHT, 'background');
   Gamefefe.game.stage.backgroundColor = '#c6e2ff';
   //Create Map
   Gamefefe.map = Gamefefe.game.add.tilemap('gamemap');
   Gamefefe.map.addTilesetImage('tile1','tiles');
   Gamefefe.backgroundlayer = Gamefefe.map.createLayer('BackgroundLayer');
   Gamefefe.groundlayer = Gamefefe.map.createLayer('GroundLayer');
   Gamefefe.map.setCollisionBetween(1, 100, true, 'GroundLayer');
   Gamefefe.groundlayer.resizeWorld();

   Gamefefe.players =[];
   Gamefefe.players.push(
       new PlayerController(0,0,'player1Walk',Gamefefe.configs.PLAYER_CONTROL)
   );
    Gamefefe.cursors = Gamefefe.game.input.keyboard.createCursorKeys();

    Gamefefe.enemies =[];
    Gamefefe.enemies.push(new FlyController(600,350,'fly'));



}
/*==================Update game state each frame==================*/
var update = function(){
  //Gamefefe.background.tilePosition.x += 5;
  for(var player of Gamefefe.players){
    player.update();


  }
  for (var enemy of Gamefefe.enemies){
      enemy.update();

  }


}
