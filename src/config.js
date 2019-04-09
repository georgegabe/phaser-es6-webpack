import Phaser from 'phaser'
import BootScene from './scenes/Boot'
import SplashScene from './scenes/Splash'
import GameScene from './scenes/Game'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'phaseres6webpack',
  scene: [
    BootScene,
    SplashScene,
    GameScene
  ]
}
