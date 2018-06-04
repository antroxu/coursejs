var exec = require('child_process').exec;

function iniciar(response) {
    console.log("Manipulador de petición 'iniciar' ha sido llamado.");
    //Ejecutar comando de DOS
    exec("ls -las", function (error, stdout, stderr){ //Callback: se ejecuta cuando termina el comando
        //Devolver resultado
        console.log("1");
        response.writeHead(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin" : "*" });
        console.log("2");
        response.write(stdout);
        console.log("3");
        response.end();
        console.log("4");
    });
}

function subir(response) {
    console.log("Manipulador de petición 'subir' ha sido llamado.");
  //response.writeHead(200, { "Content-Type": "text/html" });
    response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    response.write("Hola subir");
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
