var p = document.getElementsByTagName('p')[0];


var btn = document.getElementsByTagName('button');

for (var i = 0; i < btn.length; i++) {
  btnI = btn[i];
  console.log(btnI.innerText);
  btnI.addEventListener('click', function(){
    p.innerText += this.innerText;
  });
}
