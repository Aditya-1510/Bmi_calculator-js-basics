const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const condition = document.querySelector('#condition');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a Valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // showing the result
    results.textContent = ` Bmi rate : ${bmi}`;
    if (bmi > 24.9) {
      condition.innerHTML = '<h2>You are over weight</h2>';
    }
    if (bmi < 18.6) {
      condition.innerHTML = '<h2>You are Under Weight</h2>';
    } else {
      condition.innerHTML = '<h2>Congrats You Have Average Bmi rate !</h2>';
    }
  }
});
