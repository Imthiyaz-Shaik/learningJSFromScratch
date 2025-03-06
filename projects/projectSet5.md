# project link

[click here](https://stackblitz.com/edit/vitejs-vite-gqx2j7jg?file=index.html)

# Solution Code

## Background Color Changer

```JavaScript

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

function colorGenerator() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
const startChangingColor = function () {
  intervalId = setInterval(colorChange, 500);

  function colorChange() {
    document.body.style.backgroundColor = colorGenerator();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);

```
