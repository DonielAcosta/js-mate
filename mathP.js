// function calcularPromedio(lista){
//     let  sumaList = 0;
//     for(let i = 0; i < lista.length; i++){
//         sumaList = sumaList + lista[i];
//     }

//     const promedio = sumaList / lista.length;
//     console.log(promedio);
//     return promedio;
// }

    // metodo reduce

// function calcularPromedio(lista){
//     function sumar(valorAcumulado, nuevoValor){
//         return valorAcumulado + nuevoValor;
//     }
//     const sumaList = lista.reduce(sumar);
//     const promedio = sumaList / lista.length;
//     console.log(promedio);
//     return promedio;
// }

function calcularPromedio(lista){
    //arror function
    const sumar = (valorAcumulado, nuevoValor)=>{
       return valorAcumulado + nuevoValor;
    };
    const sumaList = lista.reduce(sumar);

    const promedio = sumaList / lista.length;
    console.log(promedio);
    return promedio;
}
