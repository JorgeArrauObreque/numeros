function esPar(numero){
    if (!isNaN(parseInt(numero))  && typeof numero == "number" && numero !== undefined) {
        return numero%2==0 ?true:false;
    }else{
        return false;
    }  
}
console.log(esPar(2));


function esImpar(numero){

    if(!isNaN(numero) && typeof numero == "number" && numero != undefined){
        return numero%2 != 0? true:false;
    }else{
        return false;
    }
}