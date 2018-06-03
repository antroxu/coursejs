function route(handle, pathname, response) {
    console.log("A punto de rutear una peticion para " + pathname);

    if (typeof handle[pathname] === "function") {
        handle[pathname](response);
        console.log("5");
    } else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("404 - No encontrado");
        response.end();
    }
}

exports.route = route;