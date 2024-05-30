import * as rls from 'readline-sync';
const nrointentosMax : number = 3;
const claveCorrecta = "eureka";
let intento : number = 0;
let clave : string = '';
while (intento<nrointentosMax && clave!=claveCorrecta){
    clave = rls.question ("ingrese la clave de acceso: ");
    intento ++;
}

if (clave!=claveCorrecta){
    console.log ("Maximo de intentos superados.");
}else{
    console.log ("Correcto");
}