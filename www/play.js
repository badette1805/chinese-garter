var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'gameDiv');

var bg1, bg2, bg3, bg4, bg5, bg6;
var player, button1, button2, platform;
var points,bestScoreText,gameOverText,continueText;
var mainState =

    {

        preload:function()
        {
        
            game.load.image("bg2","img/5.png");
      game.load.image("bg3","img/4.png");
      game.load.image("bg4","img/2.png");
      game.load.image("bg5","img/1.png");
       game.load.image("bg1","img/3.png");
        game.load.image("bg6","img/7.png");
        game.load.image("button3","img/retry.png");
        game.load.spritesheet("man","img/me.png",95,122);
       game.load.spritesheet("button1","img/button1.png",50,50);
        game.load.spritesheet("button2","img/upb.png",75,85);

         game.load.image("platform","img/platform.png");
       },

        create:function()
        {
          game.stage.backgroundColor="#00f";
              
        bg2 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg2").height,
              game.width,
              game.cache.getImage("bg2").height,
               "bg2");

                bg3 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg3").height,
              game.width,
              game.cache.getImage("bg3").height,
               "bg3");

                bg4 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg4").height,
              game.width,
              game.cache.getImage("bg4").height,
               "bg4");

                bg5 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg5").height,
              game.width,
              game.cache.getImage("bg5").height,
               "bg5");
                    bg1 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg1").height,
              game.width,
              game.cache.getImage("bg1").height,
               "bg1");
                       bg6 = game.add.tileSprite(0,
              game.height-game.cache.getImage("bg6").height,
              game.width,
              game.cache.getImage("bg6").height,
               "bg6");

           
                player = game.add.sprite(50,150,"man");
                player.animations.add('walk-right',[0,1,2,4],7,true);

              keyboard = game.input.keyboard.createCursorKeys();

                   platform = game.add.sprite(0,300,"platform");
              platform.scale.x = 2;


                    game.physics.arcade.enable(player);
                   game.physics.arcade.enable(platform);
                  player.body.collideWorldBounds = true;

                    platform.body.immovable = true;
              
                game.physics.arcade.collide(player,platform);

              button1 = game.add.button(700,20,"button1",pause);
              button1.scale.x = 1;
              button1.scale.y = 1;

               button2 = game.add.button(680,320,"button2",jump);
              button1.scale.x = 1;
              button1.scale.y = 1;

              button3 = game.add.button(600,335,"button3",retry);
              button1.scale.x = 1;
              button1.scale.y = 1;

              game.camera.follow(player);
  game.world.setBounds(0,0,100000,0);
  game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

  player.animations.add('down',[0,0,0],0,true);
  player.animations.add('jump',[2],2,true);
   player.animations.add('walk-right',[0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4],0,true);
    game.input.addPointer();
 points = game.add.text(300,25,'score: ',{fill:"blue"});
  continueText = game.add.text(300,200,'',{fill:"blue"});
  bestScoreText = game.add.text(450,25,'Best: '+getScore(),{fill:"red"});

     gameOverText = game.add.text((w/2)-100,h/2,'',{fill:"white"});
     game.camera.follow(man,"Phaser.Camera.FOLLOW_TOPDOWN");
     gameOverText.fixedToCamera =true;
     bestScoreText.fixedToCamera =true;
     points.fixedToCamera =true;
   button.fixedToCamera =true;
   button1.fixedToCamera =true;
   continueText.fixedToCamera =true;


        },


        update: function ()
        {
              bg2.tilePosition.x -=.9;
              bg3.tilePosition.x -=.5;
              bg4.tilePosition.x -=.8;
              bg5.tilePosition.x -=.6;
              bg1.tilePosition.x -=.7;
               bg6.tilePosition.x -=.7;

var manSpeed = 100;
player.animations.play("walk-right");
    player.body.velocity.x = manSpeed;
        },
}
                      function pause(){
                button1.frame =0;
              {game._paused = true;}
                button1.frame =1;
               // continueText.text = "Tap to continue!"
               // continueText.visible = true;
                game.input.onTap.addOnce(tuloy,game);
              }
              function tuloy(){
              {game._paused = false;
              //continueText.visible = false;
              }
              button1.frame =0;
              }

             function jump(){
  button.frame =1;
  if(player.body.touching.down)
  {
  player.animations.play("jump");
  player.body.velocity.y = -900;
  player.body.velocity.x = 1000;
}
setTimeout(function(){
button.frame=0;
},300)

}


    game.state.add("mainState",mainState);
    game .state.start("mainState");