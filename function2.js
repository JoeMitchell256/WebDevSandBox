var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var n, pulsefunction;

function getInputValue(){
  n = document.getElementById("n").value;
  pulsefunction = document.getElementById("n").value;
}

function func2(){
  var sum = func1( parseInt(n) + parseInt(pulsefunction) );
  ctx.fillText("Sum: " + sum, 100, 100 ); //Should display the sum as a result of input from n text box and pulsefunction textbox
}