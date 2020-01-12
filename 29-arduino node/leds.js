var jf = require("johnny-five");

var circuito = new jf.Board();

circuito.on("ready",prender);

function prender(){
    var ledRojo = new jf.Led(13);
    var ledAmarillo = new jf.Led(9);
    ledRojo.blink(500);
    ledAmarillo.blink(500);
}