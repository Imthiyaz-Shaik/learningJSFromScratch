## project  link
[click here](https://stackblitz.com/edit/stackblitz-starters-ymdnar5v?file=index.html)

# solution code

## project 2
```
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('.results');
  if (height === '' || height <= 0 || isNaN(height)) {
    results.textContent = 'please Enter a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.textContent = 'please Enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span style='color:red'>${bmi} <b> (you are Under weight)</b></span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span style='color:red'>${bmi} <b> (you are Over weight)</b></span>`;
    } else {
      results.innerHTML = `<span >${bmi}  <b> (your Weight is Normal)</b> </span>`;
    }
  }
});

```