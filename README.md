# hifumi.js
Javascript library that was inspired by Jquery 

![Hifumi-Chan!!](http://68.media.tumblr.com/b0dde3d5f5763a0d8a72455b5ee681bc/tumblr_ocoo0q5xV31s5f9ado2_540.gif)

## Installation
Download the hifumi.js from the repo and add this script to your project
```html
<script src='hifumi.js'></script>
```

## Usage
### Selector
```js
// Working with individual object
$('#id'); 

// Working with collection object
$('.classes'); // classes
$('h1, h2'); // multiple selector
$('.boxes #menu'); // css selector
$('[name="username"]') // atribut selector
```

### Built in function
```js
// working with text
$('#id').text( 'Change the text of #id' );
$('.class').text( 'Change the text of .class' );

// working with css
$('#id').css('background-color', 'aqua');
$('.classes').css('color', 'deeppink');

// working with event
$('#id').on('click', function(){
	console.log( '#id was clicked! ' );
});
$('[name="username"]').on('keydown', function(){
	console.log('User is typing the username');
});

// also you can do chaining
$('h1,h2').text('Title has changed!').css('color', 'blue');

$('#id').on('click', function(){
	$(this).css('background-color', 'deeppink').text('Hifumi.js');
});
```

## License
Licensed under the MIT License. 

## Learn More
Comming Soon!








