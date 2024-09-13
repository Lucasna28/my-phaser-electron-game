const config = {
  type: Phaser.AUTO,
  width: 1700,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("star", "assets/star.png");
  this.load.spritesheet("dude", "assets/dude.png", {
    frameWidth: 48,
    frameHeight: 48,
  });
}

function create() {
  this.add.image(400, 300, "sky");

  // Additional setup for game objects
}

function update() {
  // Game update logic
}
