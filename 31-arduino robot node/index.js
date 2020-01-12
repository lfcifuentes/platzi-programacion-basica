const jf = require("johnny-five");

let board = jf.Board();
let led;
let motor; 
let celda;

board.on("ready",ready);

function ready(){

    let config = {pin:"A0",freq:50};
    
    celda = new jf.Sensor(config);

    led = new jf.Led(); 
    led.on();

    motor = new jf.Servo(9);
    motor.to(0);

    ondear();
}

function ondear(){
    // valor de la luz en la celda
    console.log("Luz:",celda.value); 
    var luz = celda.value;
    if(luz > 800){
      if(turno == 1){
        turno = 0;
        motor.to(70);
      }else{
        turno = 1;
        motor.to(110);
      }
    }else{
        motor.to(150);
    }
    setTimeout(ondear, 1000);
}