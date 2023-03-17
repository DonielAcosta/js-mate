console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;  
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});
function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}
console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const alturaTriangulo = 5.5;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo)/2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    perimetroTriangulo,
    alturaTriangulo,
    areaTriangulo
});
function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) /2,
    }
}
console.groupEnd('Triangulo');
