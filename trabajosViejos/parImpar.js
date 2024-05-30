"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlyneSync = require("readline-sync");
var numIngresado = readlyneSync.questionInt("Ingrese número a analizar: ");
if (numIngresado == 0) {
    console.log("El número es 0");
}
else {
    var resto = (numIngresado % 2);
    if (resto == 0) {
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }
    ;
}
;
