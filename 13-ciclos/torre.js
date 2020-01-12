var c = document.getElementById("dibujito");

var ctx = c.getContext("2d");

function drawLine(color,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
drawLine("black",1,1,1,599);
drawLine("black",1,599,599,599);
drawLine("black",599, 1,599 ,599);
drawLine("black",1, 1,599,1);

for (let i=0;i<30;i++){
    let aux_i = i * 15 ;
    let aux_i1 = 300 + aux_i ;
    let aux_i2 = 300 - aux_i ;
    let aux_i3 = 600 - aux_i ;

    if(aux_i <= 300){
        drawLine((i%2==0?"blue":"red"),300,aux_i,aux_i1,300);
        drawLine((i%2==0?"blue":"red"),300,aux_i,aux_i2,300);
        drawLine((i%2==0?"blue":"red"),300,aux_i3,aux_i2,300);
        drawLine((i%2==0?"blue":"red"),300,aux_i3,aux_i1,300);
    }
}