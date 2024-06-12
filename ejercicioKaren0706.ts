import fs from 'node:fs';
const precios : number []=[525,3500,400,1999];
let escPrecios:string=precios.toString();

fs.writeFileSync('./precios.txt', escPrecios);// guarda en txt


const leoPrecios = fs.readFileSync('./precios.txt','utf8');
let arrPrecios:number[]=[]
for (let i:number=0;i<precios.length;i++){
    
    arrPrecios.push (precios[i])
}
console.log (arrPrecios);//muestra el contenido del txt en la consola en forma de arreglo




let articulo : string []=["Leche","Galletitas","Harina","Queso"];
let escArticulos:string="";
for (let i:number=0;i<articulo.length;i++){
      escArticulos += `${articulo[i]} `
}
fs.writeFileSync('./articulos.txt', escArticulos);// guarda en txt


const leoArticulos = fs.readFileSync('./articulos.txt', 'utf8');
const muestra:string=leoArticulos.trim();
const nuevoArr:string[]=muestra.split(" ")
    console.log(nuevoArr); // muestra el contenido del txt en la consola en forma de arreglo

