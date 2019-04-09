import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('elf', 'assets/images/elf_regular_hair.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
