const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    //formula ( p * (100 -D)) / 100

    const price     = Number(inputPrice.value);
    const discount  = Number(inputDiscount.value);

    if(!price || !discount){
        pResult.innerText = 'Porfavor ingresar datos';
        return;
    }
    if(discount > 100){
        pResult.innerText = 'descuento no puede superar el 100%';
        return;
    }
    const newPrice =  ( price * (100 - discount)) / 100

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}