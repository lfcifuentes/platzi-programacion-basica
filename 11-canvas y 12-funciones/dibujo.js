var c = document.getElementById("dibujito");
// optener el area de dibujo
var ctx = c.getContext("2d");

function drawCircle(color,x,y,radius,startAngle,endAngle){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x,y,radius,startAngle,endAngle);
    ctx.stroke();
}
drawCircle('red',150, 150, 50, 0.25 * Math.PI, 1.25*Math.PI);
drawCircle('black',150, 150, 50, 1.25*Math.PI,0.25 * Math.PI);
drawCircle('yellow',150, 150, 100, 1.25*Math.PI, 0.25 * Math.PI);
drawCircle('black',150, 150, 100, 0.25 * Math.PI, 1.25*Math.PI);
drawCircle('green',150, 150, 150, 0.25 * Math.PI, 1.25*Math.PI);
drawCircle('black',150, 150, 150, 1.25*Math.PI, 0.25 * Math.PI);

function drawLine(color,x1,y1,x2,y2){
    ctx.beginPath(); // iniciar trazo
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1); // punto inicial
    ctx.lineTo(x2,y2); // creamos la linea
    ctx.stroke(); // cerrar linea
    ctx.closePath(); // cerrar trazo
}
drawLine("blue",44,44,256,256)