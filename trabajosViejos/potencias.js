"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log("Este programa calcula la potencia de un numero ingresano la base y el exponente ");
var base = readlineSync.questionInt("Ingrese el valor de la base: ");
var exponente = readlineSync.questionInt("Ingrese el valor del exponente: ");
var i, resultado = 0, acumulado = 0;
if (exponente == 0) {
    console.log("1");
}
else {
    resultado = base;
    for (i = 1; i < exponente; i++) {
        resultado = resultado * base;
    }
    console.log(resultado);
}
