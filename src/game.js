class MyGame extends Phaser.Scene {
  constructor() {
    super({ key: "MyGame" });
  }

  preload() {
    // Load player and background assets
    this.load.image("background", "assets/background.jpg");
    this.load.spritesheet("player", "assets/player.jpg", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    // Add background and set it to cover the entire screen
    this.background = this.add.tileSprite(0, 0, 2000, 1400, "background");
    this.background.setOrigin(0, 0); // Ensure the background is anchored to the top-left corner

    // Create player character
    this.player = this.add.sprite(100, 450, "player");
    this.player.setOrigin(0.5, 0.5); // Center the origin of the player sprite

    // Setup input controls
    this.wasdKeys = {
      W: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };

    // Setup camera
    this.cameras.main.setBounds(0, 0, 2000, 1400);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);

    // Additional setup if needed
  }

  update() {
    // Movement speed
    const speed = 6;

    // Move player with WASD keys
    if (this.wasdKeys.W.isDown) {
      this.player.y -= speed;
    }
    if (this.wasdKeys.S.isDown) {
      this.player.y += speed;
    }
    if (this.wasdKeys.A.isDown) {
      this.player.x -= speed;
    }
    if (this.wasdKeys.D.isDown) {
      this.player.x += speed;
    }

    // Make the background scroll with the camera
    this.background.tilePositionX = this.cameras.main.scrollX;
    this.background.tilePositionY = this.cameras.main.scrollY;
  }
}

// Phaser configuration
const config = {
  type: Phaser.AUTO,
  width: 2000,
  height: 1400,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // Set gravity to 0 for top-down movement
      debug: false,
    },
  },
  scene: MyGame, // Reference the scene class
};

// Create a new Phaser game instance
const game = new Phaser.Game(config);
