var p = document.getElementsByTagName('p')[0];
var vf = false;
var equal = document.getElementById('equal');
// var plus = "+";
// var minus = "-";
// var multiply = "*";
// var divide =  "/";

var btn = document.getElementsByTagName('button');

for (var i = 0; i < btn.length; i++) {
  btnI = btn[i];
  btnI.addEventListener('click', function() {
    if (this.className == "number") {
      p.innerText += this.innerText;
    } else if (this.className == "operator" && vf == false) {
      p.innerText += this.innerText;
      vf = true;
    } else if (this.className == "operator" && vf == true) {
      alert("You can only use one operator")
    }
  });
}
equal.addEventListener('click', function() {
  p.innerText = eval(p.innerText);
})
