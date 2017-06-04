class PlayerController{
  constructor(x, y, spriteName,configs){
    this.sprite = Gamefefe.game.add.sprite(x, y, 'Assets', spriteName);
    this.configs = configs;
  }
}
