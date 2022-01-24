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
* Calcular y mostrar en HTML el valor de los 'outputs' del precio
* @param {string} outputPrecio 'Texto del precio' que se desea obtener
* @return {number} EL valor del precio con el descuento aplicado
*/
function getOutput() {
    /**
    * Valores del precio y descuento, guardadas en las propiedades del objeto
    */
    const valor = {
        precio: getInput('precio'),
        descuento: getInput('descuento')
    };
    const precioConDescuento = calcularDescuento(valor.precio, valor.descuento);
    /**
    * Escribir en HTML el valor del calculo ingresado en 'outputPrecio'; 'outputPrecio' tiene el
    * mismo nombre que el ID de HTML
    */
    const valorOutput = document.getElementById("precioConDescuento").innerHTML = precioConDescuento;

    return valorOutput;
}
//----------------------------------------------------------------------------------------------------
/**
* Enviar al archivo HTML el valor de salida
* @return {number} Los valores de getOutput a los ID's de salida
*/
function outputPrecio() {
    getOutput();
}