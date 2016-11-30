

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var kbd;
var spaceship;
var laser;

function preload() {
    game.load.image('spaceship', 'spaceship.gif');
    game.load.image('laser', 'laser.png'); 
    game.load.image('asteroid', 'asteroid.png');
    
    kbd = game.input.keyboard.createCursorKeys();

}
            

function create() {

    //  Our player ship
    spaceship = game.add.sprite(300, 300, 'spaceship');
    spaceship.anchor.set(0.5);

    //  and its physics settings
    game.physics.enable(spaceship, Phaser.Physics.ARCADE);
 
     spaceship.body.drag.set(100);
    spaceship.body.maxVelocity.set(200);
    //  This is the collision rule
    game.world.setBounds(0, 0, 800, 600);
   spaceship.body.collideWorldBounds = false;
   spaceship.body.setCircle(15)
   
   laser = game.add.sprite (300, 300, 'laser'); 
   laser.anchor.set(1);
    
    //asteroid
    
    asteroid = game.add.sprite ((Math.random() * game.world.bounds.width), (Math.random() * game.world.bounds.height), 'asteroid');
    
    game.physics.enable(asteroid, Phaser.Physics.ARCADE);
 
    asteroid.body.velocity.x = 67;
    asteroid.body.velocity.y = 139;
    asteroid.body.angularVelocity = 30;

    asteroid.speed = 50;
    asteroid.body.collideWorldBounds = true;
    
    
    //laser
   
    game.physics.enable(laser, Phaser.Physics.ARCADE);
 
    laser.body.velocity.x = 67;
    laser.body.velocity.y = 139;
    laser.body.angularVelocity = 30;

    laser.speed = 100;
    
    //  This is the collision rule
   laser.body.collideWorldBounds = true;
   laser.body.setCircle(15)
    
    

}


function update() {
    
    // asteroid position
    if (asteroid.position.x > game.world.bounds.width) {
        spaceship.position.x = 0
    }
    
    if (asteroid.position.x < 0) {
        asteroid.position.x = game.world.bounds.width
    }
    
    if (asteroid.position.y > game.world.bounds.height) {
        asteroid.position.y = 0
    }
    
    if (asteroid.position.y < 0) {
        asteroid.position.y = game.world.bounds.height
    }
    
    // spaceship position
    if (spaceship.position.x > game.world.bounds.width) {
        spaceship.position.x = 0
    }
    
    if (spaceship.position.x < 0) {
        spaceship.position.x = game.world.bounds.width
    }
    
    if (spaceship.position.y > game.world.bounds.height) {
        spaceship.position.y = 0
    }
    
    if (spaceship.position.y < 0) {
        spaceship.position.y = game.world.bounds.height
    }
    
    
    //spaceship controls
    
    if (kbd.up.isDown)  // isDown means key was pressed
    {
        game.physics.arcade.accelerationFromRotation(spaceship.rotation, 80, spaceship.body.acceleration);
    }
    else if (kbd.down.isDown)
    {   
        game.physics.arcade.accelerationFromRotation(spaceship.rotation, -80, spaceship.body.acceleration); 
    }
    else 
    {
        spaceship.body.acceleration.set(0);
    }
    
    if (kbd.left.isDown)
    {
        spaceship.body.angularVelocity = -300;
    }
    else if (kbd.right.isDown)
    {
        spaceship.body.angularVelocity = 300;
    }
    else
    {
        spaceship.body.angularVelocity = 0;
    }
    
    

}
