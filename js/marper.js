/*	Small library for personal use by Marcos Pereira - marcos97pereira@gmail.com
*
*	           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
*                   Version 2, December 2004
*
*			Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
*
*		Everyone is permitted to copy and distribute verbatim or modified
*		copies of this license document, and changing it is allowed as long
*		as the name is changed.
*
*           	DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
*  		TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
*
* 				0. You just DO WHAT THE FUCK YOU WANT TO.
*/

var marper = {

	//Returns a random integer between min and max
	getRandomInt: function(min, max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
};


/*
* Make the library compatible with require.js
*/
if ( typeof define === "function" && define.amd ) {
    define( function() {
        return marper;
    });
}