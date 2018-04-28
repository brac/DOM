# Notes from treeHouse, Javascript and the DOM
[Source]([JavaScript and the DOM TreeHouse Course](https://teamtreehouse.com/library/javascript-and-the-dom-2))

Dev Tools Console global window object examples:
```location.href```
```document```
```document.getElementById('myHeading').style.color = 'purple'```
```document.getElementById('myHeading').style.backgroundColor = 'yellow'```

DOM is the global object representing the web page.

Basic tasks JS can do with the DOM

* Select an Element
* Read or change Element
* Respond to User Events


### Simple Example
Given the page:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <script type="text/javascript" src="./app.js"></script>
  </body>
</html>
```
and in ```app.js```
```javascript
// jshint asi:true
const myHeading = document.getElementById('myHeading')

myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red'
  console.log(myHeading)
})
```
We have attatched an event listener to the H1 element that will change the color to red, as well as print out the element selected.

document is a global object. That's the DOM!

### ./example1
Given the body:
```html
<body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <input id="myTextInput" type="text">
    <button id="myButton">Change Headline Color</button>
    <button id="resetButton">Reset Headline Colro</button>
    <script type="text/javascript" src="./app.js"></script>
  </body>
```
We have a text field and a coupld buttons. Note that the unput field has an id and a value to, even though it is not defined. Or rahter it is empty. In the dev tools you can type ```myTextInput``` and chrom will print out that element. Enter ```myTextInut.value``` and you will get whatever has been entered in that at the time. There's your hook to connect that value to the button.

Back in app.js we can use this:

```javascript
// jshint asi:true
const myHeading   = document.getElementById('myHeading')
const myButton    = document.getElementById('myButton')
const myTextInput = document.getElementById('myTextInput')
const resetButton = document.getElementById('resetButton')

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value
})

resetButton.addEventListener('click', () => {
  myHeading.style.color = 'black'
})
```
Note how we are getting all those elements and changing the heading based on what the value of the text filed is. A simple app.


Here is how you would get a group of results, or all the paragraph elements. This will return an array.
```const myParagraph = document.getElementsByTagName('p')```

Given our example from before, we could enter ```myParagraph[0].style.color = 'red'``` in dev tools to change the color of the text of the first element in that arrary that was returned.

In `./example2`, we have a list of things that are purple. We can get an array, or a collection is what they are called, of ```li``` items and the iterate over that.

So in the dev console we can enter:
```const myList = document.getElementsById('li')```
And then access items individual, or loop over them with a for loop. In ```app.js``` of /example2 I do just that, looping over that list, setting their color to purple upon the completion of the script loading. Since it is in the html after everything else, we can be sure that the document is loaded enough to run said script. Anyway, on to the next one!

Selecting by ClassName
`document.getElementsByClassName()`
This works much the same way, just with classes. If you know the which elemet you will be wanting you can specify it right off the bat, for example:
```const body = document.getElementsByTag('body')[0]```


**document.querySelector()** and
**document.querySelectorAll()**
These accept all kinds of ways to select elements. The former will reutrn the first element in the list, while the latter will return a collection. You can pass it

tag names:
```document.querySelectorAll('li')```

ids:
```document.querySelectorAll('#myHeading')```

classes:
```document.querySelectorAll('.error-not-purple')```

Attributes:
```document.querySelector('[title=label]')```
Note how the above uses ```[]``` to identify a key value pair for an attribute in a html element. That's _neat_!

Psudo-classes:
```const evens = document.querySelectorAll('li:nth-child(even)')```
Which you could then stripe a list:
```javascript
for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = 'lightgray'
}
```
This is in /example3


### Which is the right method to use?
It depends on the HTML and browser support. Look up these to determine compatibility.
* MDM - Read more of this
  - Mind the sidebar with method explanations
* cauniuse.com - Look up individual methodse and such


#### Element.textContent and Element.innerHTML
You can use ```.textContent``` to read and change the text values of various elements. Look at example 4 for how this works.

You can use ```.innerHTML``` to do basically the same thing. However, it can do more like read and alter the page.

For example, entering in the console ```el.innerHTML``` will print out a string that is basically the HTML code. You can then modify or overwite that string with your own HTML code, supplied by javascript.

Again, see /example4


#### How to change the Attribute of an element
Given:
```<input class="description" type="text">```
You can read and make changes to the attribute of this element like so:
```
input.type              => text
input.className         => description
input.type = 'checkbox' => change element to checkbox
p.title = 'Some Title'  => set the title attribute for an element
```
Of note, you can't use ```element.class``` to set or read an element's class. Instead you will have to use ```element.className```


#### Styling an Element
The ```.style``` property on an element is an object, unlike other attributes. With a already identified html element (from app.js) you can enter this in the dev tools ```p.style```, to see the object and all the various css properties! _neat_!

Now, these style proprties only show the inline styles, so you can't rely on this to determine what the current styles are, unles you have set them here. So these properties are used as **setters** and not **getters**.

A common styling is to hide and show elements. Check out ```/example5``` for how this works.

Basically we grouped our things to be hidden in a ```div```, and then made a button that would set the display style to ```block``` or ```none```, depending on what it currently is. In this if block we also set the button text.

But wait, there was a problem. Looks like we had two buttons that were both firing, so this new hide button also fired our chage list description button. In order to fix this we made our selections more specefic. This worked because every element that went into that change list description button also had a class, ```.description```. So when we selected those elements at the start of our script, we grabbed those that also had that class, thus ensuring that the buttons fire seperatly.





























