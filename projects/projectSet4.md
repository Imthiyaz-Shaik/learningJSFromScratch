## project 4 Link
[click here](https://stackblitz.com/edit/stackblitz-starters-c8wzq4nv?file=index.html)

# solution code

## Digital Clock...

```JavaScript

const digitalSpace = document.querySelector('.digital');

setTimeout(function () {
  const date = new Date();
  digitalSpace.innerHTML = date.toLocaleTimeString();
}, 1000);

```