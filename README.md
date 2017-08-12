# hifumi.js
Tiny Javascript Library For Weaboo 

![Hifumi-Chan!!](http://68.media.tumblr.com/b0dde3d5f5763a0d8a72455b5ee681bc/tumblr_ocoo0q5xV31s5f9ado2_540.gif)

## Installation
Download the hifumi.js from the repo and add this script to your project
```html
<script src='hifumi.js'></script>
```

## Usage
### Selector
```js
// templating
new Hifumi('selector', 'type' ) # the type can be 'single' or 'collection'

// single object
new Hifumi('#id', 'single'); 
new Hifumi('.class', 'single'); # it will be return first object

// collection object
new Hifumi('.class ', 'collection'); # class name
new Hifumi('.#wrapper .menu', 'collection'); # css selector 
new Hifumi('[name => "username"]') # attribute selector

// you can also store the construct to variable
let object = new Hifumi('#senpai', 'single');
```

### Built in function
Hifumi js provide some method so that you can use on your project
```js

// Working with text, you also can do chaining!
new Hifumi('selector', 'type').text('new text'); #template
new Hifumi('#id', 'single').text('id text was changed!');
new Hifumi('.class', 'collection').text('class text was changed!');

// working with css
new Hifumi('selector', 'type').css('property','value') #template
new Hifumi('#id', 'single').css('color','silver') #template
new Hifumi('.class', 'collection').css('backgound-color','deeppink') # template
new Hifumi('h1','single').text('title').css('font-size','16px'); # Chaining!

// working with event handler you must store selector to variable
var obj = new Hifumi('selector','type');

obj.on('click', () =>{
	obj.text('new game is good anime').css('color','gray');
	console.log('Success!');
});
```

## License
Licensed under the MIT License. 

## Learn More
Comming Soon!

