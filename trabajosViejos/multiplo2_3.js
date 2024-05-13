"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("los numeros divisibles por 2 y por 3 son:  ");
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else {
        if (i % 3 == 0)
            console.log(i);
    }
}
