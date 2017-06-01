var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'gameDiv');

var bg1, bg2, bg3, bg4, bg5, bg6;
var player;

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
			  game.load.spritesheet("man","img/player.png",50,152);

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

            	   player = game.add.sprite(300,0,"man");
            	    player.animations.add('walk-right',[0,1,2],7,true);
    
        },


        update: function ()
        {
              bg2.tilePosition.x -=.9;
              bg3.tilePosition.x -=.5;
              bg4.tilePosition.x -=.8;
              bg5.tilePosition.x -=.6;
              bg1.tilePosition.x -=.7;
               bg6.tilePosition.x -=.7;
        },

    }
    game.state.add("mainState",mainState);
    game.state.start("mainState");