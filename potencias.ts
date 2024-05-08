import * as readlineSync from 'readline-sync';
console.log ("Este programa calcula la potencia de un numero ingresano la base y el exponente ");
let base : number = readlineSync.questionInt ("Ingrese el valor de la base: ");
let exponente : number = readlineSync.questionInt ("Ingrese el valor del exponente: ");
let i:number, resultado:number =0
if (exponente==0){
    console.log ("1");
}else{resultado=base
for (i=1;i<exponente;i++){
    
    resultado=resultado * base
    
}
    console.log(resultado);
}

   

    



    
    




