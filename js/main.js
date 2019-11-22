function drawStuff() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  //drawRects(ctx);
  //drawCircles(ctx);
  //drawLines(ctx);
  //drawText(ctx);
  //drawImage(ctx);
  drawFlag(ctx);
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

function drawImage(ctx){
  //dynamic image instead of using img tag in html
  let img = new Image(); //pict is now new Image object
  img.src = "https://www.pablo-ruiz-picasso.net/images/works/3040.jpg"; //add a source to the image
  ctx.drawImage(img, 100, 100, 50, 50);
}

function drawStar(x, y, radius) {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.moveTo(0,0 + radius);
  for (let i = 0; i < 5; i++) {
    ctx.rotate(Math.PI / 5);
    ctx.lineTo(0, radius * 3);
    ctx.rotate(Math.PI / 5);
    ctx.lineTo(0, 0 + radius);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawFlag(ctx){
  //background
  ctx.fillStyle = "rgb(0, 156, 55)";
  ctx.fillRect(0, 0, 1000, 700);
  //yellow rhombus
  ctx.beginPath();
  ctx.moveTo(85, 350);
  ctx.lineTo(500, 85);
  ctx.lineTo(915, 350);
  ctx.lineTo(500, 615);
  ctx.lineTo(85, 350);
  ctx.strokeStyle = "rgb(254, 244, 0)";
  ctx.stroke();
  ctx.fillStyle = "rgb(254, 244, 0)";
  ctx.fill();
  ctx.closePath();
  //blue circle
  ctx.beginPath();
  ctx.arc(500, 350, 175, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.strokeStyle = "rgb(0, 34, 119)";
  ctx.stroke();
  ctx.fillStyle = "rgb(0, 34, 119)";
  ctx.fill();
  //save b4 clip
  ctx.save();
  //clip white band to inner blue circle
  ctx.beginPath();
  ctx.arc(500, 350, 175, 0, 2 * Math.PI);
  ctx.clip();
  //white band
  ctx.beginPath();
  ctx.arc(400, 700, 425, Math.PI, 0);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  //fill rest of blue circle
  ctx.beginPath();
  ctx.arc(400, 700, 400, Math.PI, 0);
  ctx.closePath();
  ctx.strokeStyle = "rgb(0, 34, 119)";
  ctx.stroke();
  ctx.fillStyle = "rgb(0, 34, 119)";
  ctx.fill();
  //remove clip state
  ctx.restore();
  //draw stars
  ctx.fillStyle = "white";
  ctx.translate(500, 350);
  //https://en.wikipedia.org/wiki/Flag_of_Brazil#/media/File:Flag_of_Brazil_(dimensions).svg
  drawStar(0,90,3);
  drawStar(0,36,2);
  drawStar(18,54,2);
  drawStar(-18, 54, 2);
  drawStar(-9, 72, 1);
  drawStar(9, 0, 2);
}
