/*

var micadena = new String ("Vale");

console.log (micadena);
console.log (micadena.toString());
console.log (micadena.valueOf());

var micadmayus = new String ("vale");

*/

//Construir un tipo
function Dni (numero1) //Funcion constructora
{
    this.numero = numero1
    this.letra
    //De que tipo es numero???
    //Podria tener Dni mas propiedades
}

Dni.prototype = //Creamos una funcion de Dni dinámica
{
    calcularLetra: function ()
    {
        var letra = "";
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        letra = SECUENCIA_DNI.charAt(this.numero % 23);

        return letra;
    }
}

Dni.esValido = function (cadena) //Creamos un método de Dni estática
{
    var valido = false;
    var num_dni = parseInt (cadena);

    valido = !(isNaN(num_dni)) && (num_dni>0);  
    
    var i = 0;

    /*while ((valido) && (i < cadena.length))
    {
        valido = valido && !isNaN(cadena.charAt(i));
        i++;
    }*/

    while ((valido) && (i < cadena.length))
    {
        valido = valido && ("0123456789".indexOf(cadena.charAt(i)) != -1);
        i++;
    }


    return valido;
}

//Si Dni tuviese mas propiedades, a cual se le asignaria la propiedad entre parentesis???
var dni = new Dni (350);
//var nose = new Math; -> No se puede ya que no es un constructor
//console.log (dni.numero);
//console.log ("el proto del dni");
//console.log (dni.__proto__);

//Cambio el valor del numero
//dni.numero = 10613712;
//dni.letra ="K"
//console.log (dni.numero);
//console.log (dni);
console.log (dni.calcularLetra());

console.log ("001   ->   " + Dni.esValido(10));
console.log ("002   ->   " + Dni.esValido("10"));
console.log ("003   ->   " + Dni.esValido("10613712"));
console.log ("004   ->   " + Dni.esValido("10613712V"));
console.log ("005   ->   " + Dni.esValido(0));
console.log ("006   ->   " + Dni.esValido(1));
console.log ("007   ->   " + Dni.esValido(-123));
console.log ("008   ->   " + Dni.esValido("a"));
console.log ("009   ->   " + Dni.esValido("a1"));
console.log ("010   ->   " + Dni.esValido("1a"));
console.log ("011   ->   " + Dni.esValido(""));
console.log ("012   ->   " + Dni.esValido(" "));





