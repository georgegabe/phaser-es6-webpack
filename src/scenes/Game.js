import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {
    this.gameOver = false
  }
  preload () {}

  create () {
    this.add.image(400, 300, 'sky')

    this.addPlatforms()
    this.addPlayer()
    this.addCollectibles()
    this.addBombs()
    this.addAnimations()
    this.addColliders()
    this.addScoreboard()
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update () {
    this.getInput()
  }

  addPlatforms () {
    this.platforms = this.physics.add.staticGroup()
    this.platforms.create(400, 568, 'platform')
      .setScale(2)
      .refreshBody()

    this.platforms.create(600, 400, 'platform')
    this.platforms.create(50, 250, 'platform')
    this.platforms.create(750, 220, 'platform')
  }

  addPlayer () {
    this.player = this.physics
      .add
      .sprite(100, 450, 'dude')
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .setGravityY(300)
  }

  addCollectibles () {
    this.collectibles = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: {
        x: 12,
        y: 0,
        stepX: 70
      }
    })

    this.collectibles.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    })
  }

  addColliders () {
    this.physics.add.collider(this.player, this.platforms)
    this.physics.add.collider(this.player, this.bombs, this.gameOver, null, this)
    this.physics.add.collider(this.bombs, this.platforms)
    this.physics.add.collider(this.collectibles, this.platforms)

    this.physics.add.overlap(this.player, this.collectibles, this.collectStar, null, this)
  }

  addBombs () {
    this.bombs = this.physics.add.group()
  }

  addAnimations () {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 3,
        frames: [3, 2, 1, 0]
      }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{
        key: 'dude',
        frame: 5
      }],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 3,
        frames: [3, 2, 1, 0]
      }),
      frameRate: 10,
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

  collectStar (player, star) {
    star.disableBody(true, true)
    this.updateScore(10)
  }

  addScoreboard () {
    this.score = 0
    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
  }

  updateScore (value) {
    this.score += value
    this.scoreText.setText(`Score: ${this.score}`)
  }

  gameOver () {
    this.physics.pause()
    this.player.setTint(0xff0000)
    this.player.anims.play('turn')

    this.gameOver = true
  }
}
