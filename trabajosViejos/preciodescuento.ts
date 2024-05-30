import * as rls from  'readline-sync';
let precioProducto = rls.questionInt("Ingrese precio producto: ");
let precioDescuento : number =  precioProducto * 0.1;
let precioFinal : number = precioProducto - precioDescuento;
console.log ("El precio final de su producto con descuento será: " + precioFinal);