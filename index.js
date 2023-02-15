var expression = String();

function addToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
  }
  
  function deleteFromDisplay(){
    const oldExpresson = expression.slice(0, -1);
    expression = oldExpresson;
    document.getElementById('display').value = expression;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
    expression = '';
  }
  
  function calculate() {
    var result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  }

  window.onload = function(){
    let date = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "Developer by Oran Levi. © " + date;
  }