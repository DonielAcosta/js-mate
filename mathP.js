

const Mathcal = {};

Mathcal.esPar = function esPar(lista){
    return !(lista.length % 2);
}
Mathcal.esImpar = function esImpar(lista){
    return lista.length % 2;
}
Mathcal.calcularModa = function calcularModa(lista) {
    const listaCount = {};
  
    for (let i = 0; i < lista.length; i++) {
      const elemento = lista[i];
  
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimencional(listaArray,1)
    console.log({listaCount, listaArray});

}

Mathcal.calcMediana = function calcMediana(listaDesor){
const lista = ordenarLista(listaDesor);
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
Mathcal.calcularPromedio = function calcularPromedio(lista){
    const sumar = (valorAcumulado, nuevoValor)=>{
       return valorAcumulado + nuevoValor;
    };
    const sumaList = lista.reduce(sumar);
    const promedio = sumaList / lista.length;
    console.log(promedio);
    return promedio;
}

Mathcal.ordenarLista = function ordenarLista(listaD){

    //primera version de ordenamiento
    function ordenarListaSort(valorAcumulado,nuevoValor){
    //     if(valorAcumulado > nuevoValor){
    //         return 1;
    //     }else if(valorAcumulado == nuevoValor){
    //         return 0;
    //     }else if(valorAcumulado < nuevoValor){
    //         return -1;
    //     }
    return valorAcumulado - nuevoValor;
    }
    // const lista = listaD.sort(ordenarListaSort);
    // return lista;

    const lista = listaD.sort((a,b)=> a-b);


}

Mathcal.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada,i){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;

}

