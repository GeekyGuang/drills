var drawFlag = false
var lastPosition ={}
lastPosition.x2 = 0;
lastPosition.y2 = 0;

document.onmousedown = function(a) {
  drawFlag = true
  var x = a.clientX;
  var y = a.clientY;
  if (drawFlag){
      drawCircle(x,y,1)
  }
  lastPosition.x2 = x;
  lastPosition.y2 = y;
}

document.onmousemove = function(a) {
  var x = a.clientX;
  var y = a.clientY;
  if (drawFlag){
      drawCircle(x,y,1);
      drawLine(x,y,lastPosition.x2,lastPosition.y2);
  lastPosition.x2 = x;
  lastPosition.y2 = y;
  }
}

document.onmouseup = function(a) {
  drawFlag = false
}


function drawCircle(x,y,r) {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  
  context.beginPath();
  context.arc(x,y,r,0,Math.PI*2,true);
  context.fill();
}

function drawLine(x1,y1,x2,y2){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.lineWidth = 2;
  context.stroke();
}