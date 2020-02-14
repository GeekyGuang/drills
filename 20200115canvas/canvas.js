var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var eraserEnable = false;
autoSize();

listenToMouse();

listenToActions();

function listenToActions(){
  eraser.onclick = function(){
  eraserEnable = true;
  console.log(eraserEnable)
  }
  brush.onclick = function(){
  eraserEnable = false;
  }
}

function listenToMouse(){
  var drawFlag = false
  var lastPosition ={}
  lastPosition.x2 = 0;
  lastPosition.y2 = 0;
  
  canvas.onmousedown = function(a) {
  console.log(eraserEnable)
  var x = a.clientX;
  var y = a.clientY;
  drawFlag = true
  if(eraserEnable){
    context.clearRect(x-5,y-5,10,10);
    }else{
      lastPosition.x2 = x;
      lastPosition.y2 = y;
    }
  }

 canvas.onmousemove = function(a) {
  var x = a.clientX;
  var y = a.clientY;

  if (!drawFlag){return}

  if(eraserEnable){
    context.clearRect(x-5,y-5,10,10)
    }else{
      drawLine(x,y,lastPosition.x2,lastPosition.y2);
      lastPosition.x2 = x;
      lastPosition.y2 = y;
    }
  }

  canvas.onmouseup = function(a) {
    drawFlag = false
  }
  
}


function drawCircle(x,y,r) {
  context.beginPath();
  context.arc(x,y,r,0,Math.PI*2,true);
  context.fill();
}

function drawLine(x1,y1,x2,y2){ 
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.lineWidth = 2;
  context.stroke();
}

// 获取窗口宽高
function getSize(){
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;

  canvas.width = pageWidth
  canvas.height = pageHeight
}

function autoSize() {
  getSize()  //获取窗口宽高
  window.onresize = function() {
    getSize()
  }
}