let cnv = document.getElementById('c1');
let ctx = cnv.getContext('2d');
let teta = 0;
let timer = 0;
let click = 0;
let inputs = document.querySelectorAll("input");
let valueOut = document.querySelectorAll(".value-out");

for(let i in inputs) {
  valueOut[i].innerHTML = inputs[i].value;
  inputs[i].onchange = function() {
    valueOut[i].innerHTML = inputs[i].value;
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
  }
}

document.getElementById("start").onclick = function() {
  click++;
  click % 2 != 0 ? spiro() : clearTimeout(timer);
}

function spiro() {
  var R = document.getElementById("big-radius").value;
  var r = document.getElementById("small-radius").value;
  var d = document.getElementById("distance").value;
  var angle = document.getElementById("angle").value;
  x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta / r );
  y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta / r );
  teta += 1 / angle;
  ctx.lineWidth = 2
  ctx.lineTo(x + 300, y + 300);
  ctx.lineCap = 'round'
  ctx.stroke();
  timer = setTimeout(spiro, 20)
}