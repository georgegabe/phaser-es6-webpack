import Phaser from 'phaser'
import BootScene from './scenes/Load/Boot'
import SplashScene from './scenes/Load/Splash'
import GameScene from './scenes/Game/Game'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'phaseres6webpack',
  scene: [
    BootScene,
    SplashScene,
    GameScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
}
