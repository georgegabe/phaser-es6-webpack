import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {
  }

  preload () {}

  create () {
    this.add.image(400, 300, 'sky')

    this.addPlayer()
    this.addAnimations()
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update () {
    this.getInput()
  }

  addPlayer () {
    this.player = this.physics
      .add
      .sprite(100, 450, 'playerWalkLeft')
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .setGravityY(300)
  }

  addAnimations () {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('playerWalkLeft', {
        start: 0,
        end: 7,
      }),
      frameRate: 12,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{
        key: 'playerWalkRight',
        frame: 0
      }],
      frameRate: 12
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('playerWalkRight', {
        start: 0,
        end: 7,
      }),
      frameRate: 12,
      repeat: -1
    })
  }

  getInput () {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160)
      this.player.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn')
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-530)
    }
  }
}
