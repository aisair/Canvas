function drawStuff() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  //drawRects(ctx);
  //drawCircles(ctx);
  //drawLines(ctx);
  drawText(ctx);
}

function drawRects(ctx){
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 100, 200);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 50, 100);
}

function drawCircles(ctx){
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0,  Math.PI / 2);
  ctx.stroke();
  ctx.fill();
}

function drawLines(ctx){
  ctx.fillstyle = "blue";
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineWidth = "10";
  ctx.lineTo(50, 700);
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

function drawText(ctx){
  ctx.fillStyle = "orange";
  ctx.font = "32px Helvetica";
  ctx.fillText("The quick brown fox jumps over the lazy dog", 10, 35);
  ctx.fillText("AP CS IS NOT SO COOL", 10, 75);
}
