//Bubble Sort

let array = [31,5,96,1,0,74,28,64,11,89];
let n = array.length;

function escribirenunaLinea (arrNum:number[],n:number){
  let vector:string="";
  for(let i:number = 0;i<n;i++){
    vector+=" "+ arrNum[i] + " "
  }

  console.log (vector)
}

function bubbleSort(arrNum: number[]){
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) { 
            if (arrNum[j] < arrNum[j + 1]) {
                let aux = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = aux;
            }
        }
    }
    return arrNum;
}


bubbleSort (array)
escribirenunaLinea (array,n)
