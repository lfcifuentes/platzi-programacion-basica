class Pakiman{
    constructor(n,v,a){
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<b>"+this.nombre+"</b><br />");
        document.write("<b>Vida:</b>"+this.vida+" <br />");
        document.write("<b>Ataque:</b>"+this.ataque+" ");
        document.write("</p><hr />");
    }
}
let imagenes = {
    "Tocinauro":"cerdo.png",
    "Cauchin":"vaca.png",
    "Pokacho":"pollo.png"
};

let pakimanes = [];
pakimanes.push(new Pakiman("Tocinauro",120,40));
pakimanes.push(new Pakiman("Cauchin",100,30));
pakimanes.push(new Pakiman("Pokacho",80,50));

console.log(pakimanes);
// indice
for (var p in pakimanes) {
    pakimanes[p].mostrar();    
}
// objeto
for (var p of pakimanes) {
    p.mostrar();    
}
