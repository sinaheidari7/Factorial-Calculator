function factorial() {

  var outputObj = document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));

  var num = a;

  for (var i = num - 1; i > 1; i--) {
    num *= i;
  }

  outputObj.innerHTML="number: " + a + "<br><br>" + a + "! = " + num;

  outputObj.innerHTML = outputObj.innerHTML  + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}





 
