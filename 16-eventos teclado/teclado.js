document.addEventListener("keyup",drawLines);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var x = 150,y=150;
var color = "blue";
let keys = {
    UP:38,
    LEFT:37,
    RIGHT:39,
    DOWN:40
};
var move = 5;

c.addEventListener("mousedown",function(e){
    console.log(e);
    drawLine(ctx,"red",x,y,e.clientX,e.clientY);
    x = e.clientX;
    y = e.clientY;
});
c.addEventListener("mousemove",function(e){
    console.log(e);
    drawLine(ctx,"red",x,y,e.clientX,e.clientY);
    x = e.clientX;
    y = e.clientY;
});

drawLine(ctx,"red",x-1,y-1,x+1,y+1);

function drawLines(e) {
    switch (e.keyCode) {
        case keys.UP:
            drawLine(ctx,color,x,y,x,y-move);
            y-=move;
            break;
        case keys.DOWN:
            drawLine(ctx,color,x,y,x,y+move);
            y+=move;
            break;
        case keys.LEFT:
            drawLine(ctx,color,x,y,x-move,y);
            x-=move;
            break;
        case keys.RIGHT:
            drawLine(ctx,color,x,y,x+move,y);
            x+=move;
            break;
        default:
            break;
    }
}

function drawLine(ctx,color,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}