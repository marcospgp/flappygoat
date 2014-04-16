//Creating requestAnimationFrame to avoid crashing the browser
var requestAnimatonFrame = (function(){
	return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

//Defining vars
var W = 800, 
	H = 600,
	LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

require(["game"], function(game) {
	
	//On window load, init game
	//window.addEventListener('load', function(){
    	game.init();
    //});

});