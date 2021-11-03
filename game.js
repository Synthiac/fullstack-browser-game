// make sure to pull form single object for level design
// break up character sprites for use, coins plus eniemes

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var platforms;
var cursors;
var movingPlatform;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', '/assets/background3.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('star', '/assets/Bolt.png');
    this.load.spritesheet('king', '/assets/character.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('cloud1', '/assets/cloud8.png');
    this.load.image('cloud2', '/assets/cloud7.png');
    this.load.image('cloud3', '/assets/cloud6.png');
    this.load.image('cloud4', '/assets/cloud5.png');
    this.load.image('lightning', '/assets/lighting.png');
    this.load.audio("theme", "/assets/theme.mp3");
}

function create() {
    this.add.image(400, 300, 'sky');
    this.add.image(600, 250, 'cloud1');
    this.add.image(700, 150, 'cloud2');
    this.add.image(750, 400, 'cloud3');
    this.add.image(300, 450, 'cloud4');

    platforms = this.physics.add.staticGroup();
    clouds = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    


    movingPlatform = this.physics.add.image(400, 400, 'ground');
    movingPlatform.setImmovable(true);
    movingPlatform.body.allowGravity = false;
    movingPlatform.setVelocityX(50);

    clouds.create(500, 668, 'cloud1').setScale(2).refreshBody();
    
    movingClouds = this.physics.add.image(500, 250, 'cloud1');
    movingClouds.setImmovable(true);
    movingClouds.body.allowGravity = false;
    movingClouds.setVelocityX(50);
    

    player = this.physics.add.sprite(80, 400, 'king');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('king', { start: 1, end: 4 }),
        frameRate: 30,
        repeat: -1
        
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'king', frame: 5 }],
        frameRate: 30
    });
    this.anims.create({
        key: 'jump',
        frames: [{ key: 'king', start: 6, end: 10 }],
        frameRate: 30
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('king', { start: 1, end: 4 }),
        frameRate: 30,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, movingPlatform);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(stars, movingPlatform);
    this.physics.add.collider(stars, movingPlatform);

    this.physics.add.overlap(player, stars, collectStar, null, this);
    theme = this.sound.add("theme");
    theme.play({
    volume: 0.2,
    loop: true
  });
}



function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
        player.flipX = true;
        player.body.setVelocityX(-180);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
        player.flipX = false;
        player.body.setVelocityX(180);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }

    if (movingPlatform.x >= 500) {
        movingPlatform.setVelocityX(-50);
    }
    else if (movingPlatform.x <= 300) {
        movingPlatform.setVelocityX(50);
    }
}
function cloudMovement(){
    if (movingCloud.x >= 500) {
        movingCloud.setVelocityX(-50);
    }
    else if (movingCloud.x <= 300) {
        movingCloud.setVelocityX(50);
    }
}

function collectStar(player, star) {
    console.log("duck")
    star.disableBody(true, true);
}