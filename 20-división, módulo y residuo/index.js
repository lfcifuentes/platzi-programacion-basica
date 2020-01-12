var numeros = 100;
var fizz = 3;
var buzz = 5;
function esDivisible(a,b){
    return (a % b == 0)? true:false;
}
for (let index = 1; index <= numeros; index++) {
    let texto = index;
    if(esDivisible(index,fizz)){
        texto += " Fizz ";
    }
    if(esDivisible(index,buzz)){
        texto += " Buzz ";
    }
    document.write(texto+"<br />");
}