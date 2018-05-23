//Construir un tipo persona con dos atributos: peso y altura
function Persona (numero1, numero2) //Funcion constructora
{
    this.peso = numero1;
    this.altura = numero2;
    
}

Persona.prototype = //Creamos una funcion de persona dinámica
{
    imc: function ()
    {
        var local_imc = 0;

        local_imc = this.peso/(this.altura*this.altura);

        return local_imc;
    },


    imcL: function ()
    { 
        var local_imc = 0;
        var local_imcL = "";
        
        local_imc = this.imc();

        //Calcula clasificacion IMC
        if (local_imc<15) //Desnutrido
        {
            local_imcL= "Desnutrido";
        }else if ((local_imc>=15)&&(local_imc<18)) //Delgado
        {
            local_imcL= "Delgado";
        }else if ((local_imc>=18)&&(local_imc<25)) //Normal
        {
            local_imcL= "Normal";
        }else if ((local_imc>=25)&&(local_imc<31)) //Sobrepeso
        {
            local_imcL= "Sobrepeso";
        }else if (local_imc>=31) //Obeso
        {
            local_imcL= "Obeso";
        }
        return local_imcL;
    }

}

Persona.imcS = function (peso, altura) //Creamos un método de Dni estática
{
    var local_imc = 0;

    local_imc = peso/(altura*altura);

    return local_imc;

}

Persona.imcLS = function (imc) //Creamos un método de Dni estática
{
    var local_imc = imc;
    var local_imcL = "";
        
    local_imc = imc;

        //Calcula clasificacion IMC
        if (local_imc<15) //Desnutrido
        {
            local_imcL= "Desnutrido";
        }else if ((local_imc>=15)&&(local_imc<18)) //Delgado
        {
            local_imcL= "Delgado";
        }else if ((local_imc>=18)&&(local_imc<25)) //Normal
        {
            local_imcL= "Normal";
        }else if ((local_imc>=25)&&(local_imc<31)) //Sobrepeso
        {
            local_imcL= "Sobrepeso";
        }else if (local_imc>=31) //Obeso
        {
            local_imcL= "Obeso";
        }
        return local_imcL;

}

var individuo = new Persona (75, 1.80);
console.log ("Peso: " + individuo.peso);
console.log ("Altura: " + individuo.altura);

console.log ("001-A   ->   " + individuo.imc());
console.log ("001-B   ->   " + individuo.imcL());

console.log ("002-A   ->   " + Persona.imcS(75, 1.80));
console.log ("002-B   ->   " + Persona.imcLS(Persona.imcS(75, 1.80)));

console.log ("003-A   ->   " + Persona.imcS(80, 1.80));
console.log ("003-B   ->   " + Persona.imcLS(Persona.imcS(80, 1.80)));

console.log ("004-A   ->   " + Persona.imcS(85, 1.80));
console.log ("004-B   ->   " + Persona.imcLS(Persona.imcS(85, 1.80)));

console.log ("005-A   ->   " + Persona.imcS(90, 1.80));
console.log ("005-B   ->   " + Persona.imcLS(Persona.imcS(90, 1.80)));

console.log ("006-A   ->   " + Persona.imcS(95, 1.80));
console.log ("006-B   ->   " + Persona.imcLS(Persona.imcS(95, 1.80)));

console.log ("007-A   ->   " + Persona.imcS(100, 1.80));
console.log ("007-B   ->   " + Persona.imcLS(Persona.imcS(100, 1.80)));

console.log ("008-A   ->   " + Persona.imcS(150, 1.80));
console.log ("008-B   ->   " + Persona.imcLS(Persona.imcS(150, 1.80)));





