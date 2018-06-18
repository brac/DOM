Sometimes you want to use `event.preventDefault('submit')`. This can be accessed from the event object that comes with `addEventListener`. Submit comes from froms and it will be either the button click or an enter pressed, b/c it covers that too I guess. By preventDefault() you can stop the page from doing it's normal thing, like reloading on form submission. This allows you to further customize the expereince.

In the app, unpon a submit, we get the value from the input field then clear that same field. Then we create a new list item element and assing it's `textContent` to be whatever the text was entered from the input form. Then we create a new label element, which defines a label for an input element. We give that `textContent` confirmed or some such.

Then we create a checkbox element. Well more specifically we create an input element then set it's `.type` to `checkbox`. Finally we attach these things to our DOM nodes. We put the checkbox ont he label, the label on the line element, and the line element on the unordered list.

Now if we want to change the stylying when a check box is clicked, then we need to add another event listener, however, this time we add it to anything that `'change'`s on the `ul` through bubbling. Change is handy for doing something when something changes.

So some list item has had it's checkbox checked, that will send a 'change' event up the change where we will catch it at `ul`. First we grab the checkbox from the `event.target`. Then we determine the value of the check box, true or false, from `checkbox.checked`. Lastly, we will need to know the grandparent node on which we will apply the new, responded, class.

For that we just check if `checked` is true or not, and assing the appropriate classname.

Note that we can use `e.target.tagName` to determine what kind of element was clicked. In our example that would be a button, or BUTTON apparently.

Now we want to add an Edit button to the element that was created. This will allow our users to change the names of already entered cards.

To do that we will grab the first child element from the list item that the button clicked belongs to. We'll create a new input element, set it's type to text, and put the initial value of it to be the child elements textContent.

Now that our new input element is configured, we `insertBefore` the span, our first child element. Then we remove this span, and now it looks like the text element has magically switched to a text input element. We also update the `button.textContext` to be 'save'.

In ordre to save the new value we do much the same as editing, just in revese.

Now what we have ended up with is a bunch of thick ass blocks of code. If you look at `./4-refactor-2-readable-branching-login` you can see the end result of what I'm about to describe.

So we break up the initail blcok by creating some funtsion that will create list item elements and then append things to these list items. We wrap both those functions in a createLI function wrapper, that will also call the aforementioned functions, in such a way to append new RSVP entries on a submit click.

The next part we can refactor is the addEventListener for click events that handel the removal, eiding and saving of RSVP data.

So we have this big if block, what we can do is create a new object that has methods which will remove, edit and save the data. Also, this allows us to use bracket notation to dynamically call the property of this new object, which will in turn be our functions. So we can get rid of the if branching and instead use a one liner: `nameActions[action]` which does the same thing. _neat_ This drastically changes our code structure and makes it much easier to read, even if you have to have some base understading of how bracket notation works.

