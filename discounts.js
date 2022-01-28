/**
* Procesar los "inputs" del archivo HTML y convertir a 'Number' el tipo de dato del valor de entrada
* @param {string} preDes 'Texto de precio o descuento' que se desea obtener
* @return {number} EL valor del precio o descuento ingresado
*/
function getInput(preDes) {
    /**
    * Nombre de ID's de los elementos "input" de HTML, guardadas en las propiedades del objeto
    */
    const input = {
        precio: "inputPrecio",
        descuento: "inputDescuento"
    };
    /**
    * Dato de 'input[]' obtenido por el parámetro 'preDes'
    */
    const datoInput = document.getElementById(input[preDes]);
    /**
    * Valor de 'datoInput' convertido de tipo de dato 'String' a 'Number'
    */
    const valorInputFiltrado = Number.parseInt(datoInput.value);

    return valorInputFiltrado;
}
//----------------------------------------------------------------------------------------------------
/**
* Calcular el precio aplicando el descuento
* @param {number} precio 'Precio' del producto
* @param {number} descuento Porcentaje de 'Descuento' que se le debe aplicar
* @return {number} El precio del producto con el descuento aplicado
*/
const calcularDescuento = (precio, descuento) => (precio * (100 - descuento))/100;
//----------------------------------------------------------------------------------------------------
/**
* Calcular y enviar al archivo HTML el valor de salida
* @return {number} EL valor del precio con el descuento aplicado al ID de salida
*/
function outputPrecioDescuento() {
    /**
    * Valores del precio y descuento, guardadas en las propiedades del objeto
    */
    const valor = {
        precio: getInput('precio'),
        descuento: getInput('descuento')
    };
    /**
    * Calculo del precio menos el descuento
    */
    const precioConDescuento = calcularDescuento(valor.precio, valor.descuento);
    /**
    * Escribir en el ID "precioDescuento" de HTML el precio con descuento
    */
    document.getElementById("precioDescuento").innerHTML = precioConDescuento;
}
//----------------------------------------------------------------------------------------------------
/**
* Calcular y enviar al archivo HTML el valor de salida
* @return {number} EL valor del precio con el descuento aplicado al ID de salida
*/
function checkCodigo() {
    /**
    * Codigo del ID "inputCodigo" convertido en 'String' con .value
    */
    const inputCodigo = document.getElementById("inputCodigo").value;
    /**
    * ID's de los outputs de HTML
    */
    const idOutput = {
        'validacion': document.getElementById("validacion"),
        'precio': document.getElementById("precioDescuentoCodigo")
    };
    if (inputCodigo == "awesomeGuitar30") {
        idOutput.validacion.innerHTML = `Este codigo aplica el 30% de descuento`;
        idOutput.precio.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 30)}`;
    }
    else if (inputCodigo == "awesomeGuitar20") {
        idOutput.validacion.innerHTML = `Este codigo aplica el 20% de descuento`;
        idOutput.precio.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 20)}`;
    }
    else if (inputCodigo == "awesomeGuitar15") {
        idOutput.validacion.innerHTML = `Este codigo aplica el 15% de descuento`;
        idOutput.precio.innerHTML = `<s>$800</s> <br> $${calcularDescuento(800, 15)}`;
    } else {
        idOutput.precio.innerHTML = `$800`;
        idOutput.validacion.innerHTML = `Codigo invalido`;
    }
}