/**
* Calcular el precio aplicando el descuento
* @param {number} precio 'Precio' del producto
* @param {number} descuento Porcentaje de 'Descuento' que se le debe aplicar
* @return {number} El precio del producto con el descuento aplicado
*/
const calcularDescuento = (precio, descuento) => (precio * (100 - descuento))/100;

module.exports = calcularDescuento;