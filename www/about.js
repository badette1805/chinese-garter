var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'gameDiv');

var background;
var balik, back;
var mainState = {

    preload:function(){

    game.load.image("background","img/dev.png")
	game.load.image("back","img/B.png")
	},


     create:function(){

     game.add.sprite(0,0,"background");
	 back = game.add.button(350,300,"back",balik);
     },

       update: function () {

},
}

       	function balik ()
{
     window.location.href="index.html";
  {balik.frame=0}  
setTimeout(function(){
    
balik.frame=0;
game._paused=false;
},50);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");