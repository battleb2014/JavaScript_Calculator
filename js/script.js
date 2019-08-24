function calc() {
  let num1 = parseInt(document.querySelector('#val1').value);
  let num2 = parseInt(document.querySelector('#val2').value);
  let op = document.querySelector('#operator').value;
  let calculate;

  if (op == 'add') {
    calculate = num1 + num2;
  } else if (op == 'min') {
    calculate = num1 - num2
  } else if (op == 'div') {
    calculate = num1 / num2
  } else if (op == 'mul') {
    calculate = num1 * num2
  }

  document.getElementById('calc').innerHTML = calculate;
}
