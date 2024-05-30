"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var i, linea;
var numero1 = rls.questionInt("Ingrese el primer valor: ");
var numero2 = rls.questionInt("Ingrese el segundo valor: ");
var opcionMenu = rls.questionInt("Ingrese 1 para sumar o 2 para restar o cualquier otra tecla para salir");
if (opcionMenu == 1) {
    linea = "-";
    for (i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
    console.log("El resultado es = ", numero1 + numero2);
    linea = "-";
    for (i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
