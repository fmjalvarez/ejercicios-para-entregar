import * as readlyneSync from  'readline-sync';
let numIngresado = readlyneSync.questionInt("Ingrese número a analizar: ");
if (numIngresado  == 0 ){ 
    console.log  ("El número es 0");
}else{
    let resto : number = (numIngresado % 2);

if (resto == 0){
       console.log ("Es par");
       }else{
        console.log ("Es impar") };
 
};


 
