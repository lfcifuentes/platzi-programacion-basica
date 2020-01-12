class Billete {
    constructor(v,c){
        this.valor = v
        this.cantidad = c
        this.imagen  = this.valor+".png";
    }
}
function setBilletesTabla(){
    for(b of caja){
        document.getElementById("b"+b.valor).innerText = b.cantidad
    }
}

let caja = [];
caja.push(new Billete(100,10));
caja.push(new Billete(50,30));
caja.push(new Billete(20,20));
caja.push(new Billete(10,20));
caja.push(new Billete(5,20));
caja.push(new Billete(1,20));

let entregado = [];
let dinero = 0;
let div = 0;
let papeles = 0;
let respuesta = document.getElementById("respuesta");

function entregarDinero(){
    dinero = parseInt(document.getElementById("dinero").value)
    entregado = [];
    for(b of caja){
        if(dinero > 0){
            div = Math.floor( dinero / b.valor )
            papeles = div > b.cantidad ? b.cantidad : div;
            b.cantidad -= papeles;
            entregado.push(new Billete(b.valor,papeles) )
            dinero = dinero - (b.valor * papeles);
        }
    }
    if(dinero > 0){
        respuesta.innerText = "Soy un cejero pobre y no tengo dinero";
    }else{
        respuesta.innerHTML = "";
        for(let e of entregado){
            if(e.cantidad > 0){
                for(let i=0;i<e.cantidad;i++){
                    respuesta.innerHTML += `<img class="billetes" src="${ e.imagen }" />`;
                }
            }
        }
    }
    setBilletesTabla();
    document.getElementById("dinero").value = '';
}

let b = document.getElementById("button")
b.addEventListener("click",entregarDinero)

setBilletesTabla();