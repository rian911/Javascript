let calculation = localStorage.getItem('calculation') || '';

displayCal();

function displayCal() {
  document.querySelector('.display').innerHTML =
    localStorage.getItem('calculation');
}
function calC(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  displayCal();
}

// optional for reuse code
function saveCal() {
  localStorage.setItem('calculation', calculation);
}
