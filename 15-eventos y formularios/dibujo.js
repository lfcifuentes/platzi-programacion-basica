var text = document.getElementById("numberLines");
var button = document.getElementById("changeLines");

button.addEventListener("click",drawCanvas);

var c = document.getElementById("dibujito");
var witdh = c.width;
var heigth = c.height;
var ctx = c.getContext("2d");

function drawLine(color,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function drawCanvas(){
    ctx.clearRect(0,0,heigth,witdh);
    var lines = parseInt(text.value);
    var space = heigth/lines;
    drawLine("black",1,1,1,witdh-1);
    drawLine("black",1,299,299,witdh-1);

    for (let i=0;i<lines;i++){
        let aux_i = i * space;
        let aux_i1 = (i+1)* space;
        drawLine((i%2==0?"blue":"red"),0,aux_i,aux_i1,heigth);
    }
}