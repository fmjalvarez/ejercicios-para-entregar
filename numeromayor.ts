let mayorArreglo : number[] = new Array (4,7,9,3,1,45,67,23,29,78,11,16);
let indice:number;let acCumulado : number = 0;
for (indice=0;indice<12;indice++){
    if ( mayorArreglo[indice] >acCumulado){
        acCumulado= mayorArreglo [indice]
    }
}   
    console.log ("El numero mayor es: " +acCumulado ) 

function parImpar (acCumulado:number):string {

    if (acCumulado % 2 == 0){;
       return 'Es par'
       }else{
       return 'Es impar' };
}
  console.log (parImpar (acCumulado));

       