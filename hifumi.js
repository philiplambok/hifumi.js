/**
 * @author: Philip Lambok 
 * Hifumi.js >//<
 */
 
(function(){
	function getElement( el )
	{
		var firstLetter = el.charAt(0); 

		// for multi and css selector
		if( (el.indexOf( ',' ) > 0) || ( el.indexOf(' ') > 0 ) ){
			return document.querySelectorAll( el );
		}

		// standart selector
		switch( firstLetter ){
			case '#':
				return document.getElementById( el.substr(1) ); 
			case '.':
				return document.getElementsByClassName( el.substr(1) );
			case '[':
				return document.querySelectorAll( el );
			default:
				return document.getElementsByTagName( el );
		}
	}

	var $ = function (el)
	{
		if( this === window ) return new $( el );

		if ( el instanceof Object )
			this.el = el;
		else	
			this.el = getElement(el);

		return this;
	}

	function callFunction( items, callback )
	{
		if( items.length ){
			for( var i = 0; i < items.length; i++ ){
				callback( items[i] );
			}
		}else{
			callback( items );
		}
	}

	/*  
	* build in function chain
	*/

	$.prototype.text = function( text )
	{
		callFunction(this.el, function(el){
			el.innerHTML = text;
		});
		
		return this;
	}


	$.prototype.css = function( property, value )
	{
		callFunction(this.el, function(el){
			el.style[property] = value
		});

		return this;
	}

	$.prototype.on = function( event, callback )
	{
		callFunction( this.el, function( el ){
			el.addEventListener( event, callback )			
		});

		return this;
	}

	// register the $
	window.$ = $;
})();