"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nrointentosMax = 3;
var claveCorrecta = "eureka";
var intento = 0;
var clave = '';
while (intento < nrointentosMax && clave != claveCorrecta) {
    clave = rls.question("ingrese la clave de acceso: ");
    intento++;
}
if (clave != claveCorrecta) {
    console.log("Maximo de intentos superados.");
}
else {
    console.log("Correcto");
}
