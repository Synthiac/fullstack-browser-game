// make sure to pull form single object for level design
// break up character sprites for use, coins plus eniemes
// can add scene model for levels in tiled

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'canvas',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: {
        key: "main",
        preload: preload,
        create: create,
        update: update
        // add scale manager for full scene deployment
    }
};
var game = new Phaser.Game(config);


function preload() {
    // this.load.image('tile', '/assests/map/mytileset.json'), embeded
    this.load.tilemapTiledJSON('map', '/assets/map/map.json');
    this.load.image('sky', '/assets/background3.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('bolt', '/assets/Bolt.png');
    this.load.spritesheet('king', '/assets/character.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('cloud1', '/assets/cloud8.png');
    this.load.image('cloud2', '/assets/cloud7.png');
    this.load.image('cloud3', '/assets/cloud6.png');
    this.load.image('cloud4', '/assets/cloud5.png');
    this.load.image('lightning', '/assets/lightning.png'); 
    this.load.audio("theme", "/assets/theme.mp3");
}


var player;
var bolt;
var platforms;
var cursors;
var movingPlatform;
var map;
var groundLayer;
var tileSet;
var moveCam = true;




function create() {
    // var tileSet = map.addTilestImage("tileset", "tiles");
    // var groundLayer = map.createStaticLayer('Tiles', tileSet, 0, 0);

// this.physics.world.bounds.width = groundLayer.width;
// this.physics.world.bounds.height = groundLayer.height;

    // this.add.image(400, 300, 'sky');
    // this.add.image(600, 250, 'cloud1');
    // this.add.image(700, 150, 'cloud2');
    // this.add.image(750, 400, 'cloud3');
    // this.add.image(300, 450, 'cloud4');

    // platforms = this.physics.add.staticGroup();
    // clouds = this.physics.add.staticGroup();

    // platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    


    // movingPlatform = this.physics.add.image(400, 400, 'ground');
    // movingPlatform.setImmovable(true);
    // movingPlatform.body.allowGravity = false;
    // movingPlatform.setVelocityX(50);

    // clouds.create(500, 668, 'cloud1').setScale(2).refreshBody();
    
    // movingClouds = this.physics.add.image(500, 250, 'cloud1');
    // movingClouds.setImmovable(true);
    // movingClouds.body.allowGravity = false;
    // movingClouds.setVelocityX(50);
    

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

    bolt = this.physics.add.group({
        key: 'bolt',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    bolt.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    // this.physics.add.collider(player, platforms);
    // this.physics.add.collider(player, movingPlatform);
    // this.physics.add.collider(bolt, platforms);
    // this.physics.add.collider(bolt, movingPlatform);
    // this.physics.add.collider(bolt, movingPlatform);

//     this.physics.add.overlap(player, bolt, collectBolt, null, this);
//     theme = this.sound.add("theme");
//     theme.play({
//     volume: 0.2,
//     loop: true
//   });
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

    // if (movingPlatform.x >= 500) {
    //     movingPlatform.setVelocityX(-50);
    // }
    // else if (movingPlatform.x <= 300) {
    //     movingPlatform.setVelocityX(50);
    // }
}
// function cloudMovement(){
//     if (movingCloud.x >= 500) {
//         movingCloud.setVelocityX(-50);
//     }
//     else if (movingCloud.x <= 300) {
//         movingCloud.setVelocityX(50);
//     }
// }

//action of picking up bolt, session or db relationship
// function collectBolt(player, bolt) {
//     console.log("points up")
//     bolt.disableBody(true, true);
// };

    // This is the route that gets our comments
    // corresponds to in game event trigger
    // if(){
    //     const response = await fetch(`/${:id}`, {
    //         method: "GET"
    //     })
    // }

