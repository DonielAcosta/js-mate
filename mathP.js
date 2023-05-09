function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(lista){
    return lista.length % 2;
}

function calcMediana(lista){
 const listaEspar = esPar(lista);

 if(listaEspar){
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    // const mitad1ListaPar = lista[(lista.length / 2) - 1];
    // const mitad2ListaPar = lista[lista.length / 2];

    // lista[indexMitad1ListaPar] 
    // lista[indexMitad2ListaPar] 
    // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]
    // const listaMitades = [mitad1ListaPar, mitad2ListaPar];

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
 }else{
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    console.log(indexMitadListaImpar);
    console.log(lista[indexMitadListaImpar]);
 }
}
function calcularPromedio(lista){
    const sumar = (valorAcumulado, nuevoValor)=>{
       return valorAcumulado + nuevoValor;
    };
    const sumaList = lista.reduce(sumar);
    const promedio = sumaList / lista.length;
    console.log(promedio);
    return promedio;
}
