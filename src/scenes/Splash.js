import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    // load your assets
    this.load.spritesheet(
      'playerWalkRight',
      'assets/images/character-02-walk-right.png',
      {
        frameWidth: 92,
        frameHeight: 148
      }
    )

    this.load.spritesheet(
      'playerWalkLeft',
      'assets/images/character-02-walk-left.png',
      {
        frameWidth: 92,
        frameHeight: 148
      }
    )

    this.load.image('sky', 'assets/images/sky.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
