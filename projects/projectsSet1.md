# projects related to DOM

## project 1 link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-t9jxqhsk?file=index.html)

# Solution Code

## Project 1
```javaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'white';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'black';
    }
    if (e.target.id === 'crimson') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'beige';
    }
    if (e.target.id === 'lightyellow') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'brown';
    }
    if (e.target.id === 'bisque') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'darkslategrey';
    }
    if (e.target.id === 'chocolate') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'palegreen') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'crimson';
    }
  });
});


```



