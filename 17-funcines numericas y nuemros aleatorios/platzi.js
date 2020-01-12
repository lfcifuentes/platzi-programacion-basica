var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var posVacas=[];
var posCerdos=[];
var posPollos=[];
class Coordenada {
  constructor(){
    this.x = (aleatorio(0, 7) * 60);
    this.y = (aleatorio(0, 10) * 40);
  }
  set(x,y){
    this.x = x;
    this.y = y;
  }
  setY(y){
    this.y += this.check(this.y,y)
  }
  setX(x){
    this.x += this.check(this.x,x)
  }
  check(a,b){
    let c = 0
    if(b < 0 && a > 0){
      c=b;
    }else if(b > 0 && a < (vp.height-80)){
      c=b;
    }
    return c;
  }
}

class ImagenCanvas{
  constructor(url){
    this.cantidad = aleatorio(1, 10);
    this.cargoOk = false;
    this.initImage(url);
  }
  initImage(url){
    this.imagen = new Image();
    this.imagen.src = url;
    this.imagen.addEventListener("load",()=>{
      this.loaded();
    });
  }
  loaded(){ 
    this.cargoOk = true;
    dibujar();
  }
}

var fondo = new ImagenCanvas("tile.png");

var vaca = new ImagenCanvas("vaca.png");
document.getElementById("vacas").innerText = vaca.cantidad;

var cerdo = new ImagenCanvas("cerdo.png");
document.getElementById("cerdos").innerText = cerdo.cantidad; 

var pollo = new ImagenCanvas("pollo.png");
document.getElementById("pollos").innerText = pollo.cantidad; 

var hombre = new ImagenCanvas("hombre.png");
var posHombre = new Coordenada(0,0);
    posHombre.set(0,0);

function dibujar(){
  if(fondo.cargoOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargoOk){
    for(var v=0; v < vaca.cantidad; v++){
      if(posVacas.length<vaca.cantidad){
        var pos = new Coordenada();
        posVacas.push(pos);
      }
      papel.drawImage(vaca.imagen, posVacas[v].x, posVacas[v].y);
    }
  }
  if(cerdo.cargoOk){
    for(var c=0; c < cerdo.cantidad; c++){
      if(posCerdos.length<cerdo.cantidad){
        var pos = new Coordenada();
        posCerdos.push(pos);
      }
      papel.drawImage(cerdo.imagen, posCerdos[c].x, posCerdos[c].y);
    }
  }
  if(pollo.cargoOk){ 
    for(var p=0; p < pollo.cantidad; p++){
      if(posPollos.length<pollo.cantidad){
        var pos = new Coordenada();
        posPollos.push(pos);
      }
      papel.drawImage(pollo.imagen, posPollos[p].x, posPollos[p].y);
    }
  }
  
  if(hombre.cargoOk){
    papel.drawImage(hombre.imagen, posHombre.x, posHombre.y);
  }
}
function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
document.addEventListener("keydown",move);
var keys = {
  UP:38,
  LEFT:37,
  RIGHT:39,
  DOWN:40
};
function move(e) {
  switch (e.keyCode) {
      case keys.UP:
          posHombre.setY(-10);
          break;
      case keys.DOWN:
          posHombre.setY(10);
          break;
      case keys.LEFT:
          posHombre.setX(-10);
          break;
      case keys.RIGHT:
          posHombre.setX(10);
          break;
      default:
          break;
  }
  dibujar();
}