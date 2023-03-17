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


console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI =3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio){
    const diametro = (radio *2 );
    const radioAlcuadrado = Math.pow(radio,2);
    return{
        circunferencia: diametro * Math.PI,
        area: radioAlcuadrado * Math.PI,
    }
}

console.groupEnd('Circle');