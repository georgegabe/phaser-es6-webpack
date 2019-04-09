/* globals __DEV__ */
import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'
import Character from '../sprites/Character'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {}
  preload () {}

  create () {
    this.mushroom = new Mushroom({
      scene: this,
      x: 400,
      y: 300,
      asset: 'mushroom'
    })

    this.character = new Character({
      scene: this,
      x: 400,
      y: 300,
      asset: 'elf'
    })

    // this.add.existing(this.mushroom)
    this.add.existing(this.character)
  }
}
