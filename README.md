modalBox
=========

<h2>modalBox</h2>

A small jQuery plugin to handle dynamic and static modal popup windows with percentages 

colMerge will use options or static content to create a modal popup with percentange width and height whilst centering it with in the browser window. Because percentage width/heigh is calculated it means this modal is fully resposive without having to use media queries.

<h3>Getting Started</h3>

<h4>Dynamic modalBox</h4>

Include jQuery and the plugin, then select the containing element of the modalBox content.
You then need to provide values for the options shown below. If no values are provided the defaults are used.

```html
<a href="#" class="modalBox">Click Here</a>

<script src="jquery.js"></script>
<script src="jquery.modalBox.js"></script>
<script>
$(document).ready(function(){
      $('.modalBox').modalBox({
		title:'title of the content',
		description:'Description of the content',
	});
</script>
```


<h4>Static modalBox</h4>

Include jQuery and the plugin, then select the containing element of the modalBox content. Name the ID of the static content div the same as the containing element. So in this example it is called id="modalBox".
You then need to provide the 'staticPopup: true' options as below. This tells the plugin that you are using static content instead of the options for title and description as above.

```html

<p id="modalBox">Click Here</p>
<div href="#" id="modalBox" class="hidden"><p>Content for static modalBox</p></div>

<script src="jquery.js"></script>
<script src="jquery.modalBox.js"></script>
<script>
$(document).ready(function(){
      $('.modalBox').modalBox({
		staticPopup: true
	});
</script>
```

<h3>Options</h3>

There are a number of different options for the modalBox as listed below.

```javascript
$(document).ready(function(){
	$().modalBox({
		height: "80",
		width: "80",
		padding: "10",
		title: "JQuery Modal Box Demo",
		description: "Example of how to create a modal box.",
		staticPopup: false
	});
});
```
`height`<br/>
Default: 80<br/>
Description: height of the modalBox as a percentage

`width`<br/>
Default: 80<br/>
Description: width of the modalBox as a percentage

`padding`<br/>
Default: 10<br/>
Description: padding of the modalBox content container

`title`<br/>
Default: Jquery modalBox plugin title<br/>
Description: title of the content inside the dynamic modalBox

`description`<br/>
Default: this is the description of your modalBox<br/>
Description: description for the content inside the dynamic modalBox

`staticPopup`<br/>
Default: false<br/>
Description: to determin if you are wanting to use the static modalBox or not
