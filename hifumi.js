class Hifumi {

	constructor( selector, type )
	{
		// init
		this.selector = selector;
		this.type = type;
		this.element = null;
		this.single = false;
		this.collection = false;

		if( this.type === 'single' )
			this.single = true;
		else if (this.type === 'collection')
			this.collection = true;

		// get the elements
		this.getElement();

	}

	getElement()
	{
		if( this.single ){
		
			this.element =  document.querySelector( this.selector );
		
			return this;
		}
		else if( this.collection ) {
		
			this.element = document.querySelectorAll( this.selector );
			return this;
		
		}
	}

	text( newText )
	{
		if( this.single ){
		
			this.element.textContent = newText;

			return this;		
		}else if( this.collection ){
		
			for( let current of this.element ){
				current.textContent = newText;
			}

			return this;
		}
	}

	css ( property, value )
	{
		if( this.single ){
		
			this.element.style[property] = value;
			return this;
		
		}else if (this.collection) {

			for( let current of this.element ){
				current.style[property] = value;
			}

			return this;
		}
	}

	on( eventName, callback )
	{
		if( this.single ){
		
			this.element.addEventListener( eventName, callback );
			
			return this;
		
		}else if( this.collection ){
			
			for( let current of this.element ){
				current.addEventListener( eventName, callback );
			}
			return this;
		}
	}
}


let test = new Hifumi( '.boxes', 'collection' );

test.on('click', () =>{
	test.css( 'color', 'deeppink' );
});

