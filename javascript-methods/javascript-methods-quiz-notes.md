# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Using the log method of the console object

- What is a method?
  A method is function but built as a property of an object

- How is a method different from any other function?
  They can be called without being defined

- How do you remove the last element from an array?
  array.pop()

- How do you round a number down to the nearest integer?
  Math.floor()

- How do you generate a random number?
  Math.random()

- How do you delete an element from an array?
  array.splice(index, #elements to remove)

- How do you append an element to an array?
  Multiple methods. Splice can have an optional third value to replace. You can also use .push() to add to the end, and .unshift() to add to the beginning of an array.

- How do you break a string up into an array?
  string.split(). Arguement matters. If no space between quotes (""), the string is broken into individual characters. If a space is present, (" "), it splits at any place there is a space contained. Alternatively, I assume a letter, number or symbol may be placed here to split at designated points or after a certain number of characters in a row are found.

- Do string methods change the original string? How would you check if you weren't sure?
  only if they were assigned back to the same string variable. You could use console.log on the original string name.

- Roughly how many string methods are there according to the MDN Web docs?
  52?

- Is the return value of a function or method useful in every situation?
  Is it? Maybe not. Should it be? I would think yes.

- Roughly how many array methods are there according to the MDN Web docs?
  43?

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  MDN?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
