//   ██████╗ █████╗ ██╗      ██████╗
//  ██╔════╝██╔══██╗██║     ██╔════╝
//  ██║     ███████║██║     ██║
//  ██║     ██╔══██║██║     ██║
//  ╚██████╗██║  ██║███████╗╚██████╗
//   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝

/**
 * Calcular el precio aplicando el descuento
 * @param {number} price 'Precio' del producto
 * @param {number} discount Porcentaje de 'Descuento' que se le debe aplicar
 * @return {number} El precio del producto con el descuento aplicado
 */
export const discount = (price, discount) =>
  parseFloat(((price * (100 - discount)) / 100).toFixed(2));
