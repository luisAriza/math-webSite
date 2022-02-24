import { calcularDescuento } from './module.js';

/**
* Procesar los "inputs" del archivo HTML y convertir a 'Number' el tipo de dato del valor de entrada
* @param {string} preDes 'Texto de precio o descuento' que se desea obtener
* @return {number} EL valor del precio o descuento ingresado
*/
function getInput(preDes) {
    /** Nombre de ID's de los elementos "input" de HTML, guardadas en las propiedades del objeto */
    const input = {
        price: "inputPrice",
        discount: "inputDiscount"
    };
    /** Dato de 'input[]' obtenido por el parámetro 'preDes' */
    const datoInput = document.getElementById(input[preDes]);
    /** Valor de 'datoInput' convertido de tipo de dato 'String' a 'Number' */
    const valorInputFiltrado = Number.parseInt(datoInput.value);

    return valorInputFiltrado;
}
//----------------------------------------------------------------------------------------------------
const outputPriceDiscount = document.querySelector(".calculate");

outputPriceDiscount.onclick = () => {
    /** Valores del precio y descuento, guardadas en las propiedades del objeto */
    const valor = {
        precio: getInput('price'),
        descuento: getInput('discount')
    };
    /** Calculo del precio menos el descuento */
    const precioConDescuento = calcularDescuento(valor.precio, valor.descuento);
    /** Escribir en el ID "priceDiscount" de HTML el precio con descuento */
    document.getElementById("priceDiscount").innerHTML = precioConDescuento;
}
//----------------------------------------------------------------------------------------------------
const checkCode = document.querySelector(".confirm");

checkCode.onclick = () => {
    /** Codigo del ID "inputCodigo" convertido en 'String' con .value */
    const inputCodigo = document.getElementById("inputCode").value;
    /** ID's de los outputs de HTML */
    const idOutput = {
        'validation': document.getElementById("validation"),
        'price': document.getElementById("codeDiscountPrice")
    };
    if (inputCodigo == "awesomeGuitar30") {
        idOutput.validation.innerHTML = `Este codigo aplica el 30% de descuento`;
        idOutput.price.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 30)}`;
    }
    else if (inputCodigo == "awesomeGuitar20") {
        idOutput.validation.innerHTML = `Este codigo aplica el 20% de descuento`;
        idOutput.price.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 20)}`;
    }
    else if (inputCodigo == "awesomeGuitar15") {
        idOutput.validation.innerHTML = `Este codigo aplica el 15% de descuento`;
        idOutput.price.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 15)}`;
    } else {
        idOutput.price.innerHTML = `$800`;
        idOutput.validation.innerHTML = `Codigo invalido`;
    }
}