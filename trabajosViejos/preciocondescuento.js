"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlyneSync = require("readline-sync");
var precioProducto = readlyneSync.questionInt("Ingrese precio producto: ");
var precioDescuento = precioProducto * 0.1;
var precioFinal = precioProducto - precioDescuento;
console.log("El precio final de su producto con descuento será: " + precioFinal);
