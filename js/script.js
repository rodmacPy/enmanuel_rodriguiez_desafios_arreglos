function siempreHambriento(arr) {
    // tu código aquí 
    let haycomida = false;
    for(item of arr){
        if(item == "comida"){
            console.log("Delicioso");
            haycomida=true
        }
    }
    if (haycomida == true) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


function highPass(arr, cutoff) {
    var filteredArr = [];
    let aux = 0;
    for(item of arr){
        if (item > cutoff) {
            filteredArr[aux] = item;
            aux++;
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("El nuevo array es: " + result); // esperamos de vuelta [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for(item of arr){
        sum += item
    }
    let promedio = sum/arr.length
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for(item of arr){
        if (item > promedio) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log("Las variables mayores que el promedio son: " + result); // esperamos 4 de vuelta



function reverse(arr) {
    // tu código aquí
    let count=0;
    for(idx in arr){
        let aux;
        if (count <= arr.length/2) {
            aux = arr[idx]
            arr[idx] = arr[arr.length - idx - 1]
            arr[arr.length - idx - 1] = aux;
            count++
        }
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for (let i = 0; i < n-2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
