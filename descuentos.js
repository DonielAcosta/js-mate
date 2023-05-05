const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    //formula ( p * (100 -D)) / 100

    // const arrayUObjeto = undefined; // ['cupones','descuentos'] {}?

    const couponObj = {
        'doniel': 30,
        'abc': 15,
        'posman': 50
    };
    const price     = Number(inputPrice.value);
    const coupon  = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = 'Porfavor ingresar datos';
        return;
    }

    let discount;
    if(couponObj[coupon]){
        discount = couponObj[coupon];
    }else{
        pResult.innerText = 'Cupon no es Valido'
        return;
    }

    // switch (coupon) {
    //     case 'Doniel':
    //         discount = 30;
    //         break;
    //     case 'no_le_digas_a_nadie':
    //         discount = 50;
    //         break;
    //     default:
    //         pResult.innerText = 'Cupon no es Valido'
    //         return;
    // }
    // if(coupon == 'Doniel'){
    //     discount = 30;
    // }else if(coupon =='no_le_digas_a_nadie') {
    //     discount = 50;
    // } else{
    //   pResult.innerText = 'Cupon no es Valido'
    //   return;
    // }

    if(discount > 100){
        pResult.innerText = 'descuento no puede superar el 100%';
        return;
    }
    const newPrice =  ( price * (100 - discount)) / 100

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}