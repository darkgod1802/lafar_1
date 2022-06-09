function isProgressive(numbersArray) {
    let numberBadIndex;
    let numbersBadQty = 0;
    for(let i = 0; i < numbersArray.length -1; i++){
        if((numbersArray[i] +1) != numbersArray[i+1]){
            numbersBadQty++;
            if(numbersBadQty > 1) {
                console.log(`Eliminando 1 elemento de la lista, no cumple la condición`);
                return false;
            }
            else if( i + 2 < numbersArray.length || (numbersArray[i] +1) != numbersArray[i+2]){
                console.log(`Eliminando 1 elemento de la lista, no cumple la condición`);
                return false;
            } else numberBadIndex = i + 1;
        }
        if(numbersBadQty == 1){
            numbersArray.splice(numbersBadQty, 1);
            console.log(`Eliminando el elemento nro. ${numberBadIndex} de la lista, cumple la condición`);
        } else {
            console.log("La lista cumple la condición sin la necesidad de eliminar algun elemnto");
        }
        return true;
    }


}