import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    // load your assets
    this.load.spritesheet(
      'dude',
      'assets/images/character-01.png',
      {
        frameWidth: 100,
        frameHeight: 100
      }
    )

    this.load.image('bomb', 'assets/images/bomb.png')
    this.load.image('platform', 'assets/images/platform.png')
    this.load.image('sky', 'assets/images/sky.png')
    this.load.image('star', 'assets/images/star.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
