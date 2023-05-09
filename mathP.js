function calcularPromedio(lista){
    let  sumaList = 0;
    for(let i = 0; i < lista.length; i++){
        sumaList = sumaList + lista[i];
    }
    const promedio = sumaList/lista.length;
    console.log(promedio);
    return promedio;
}