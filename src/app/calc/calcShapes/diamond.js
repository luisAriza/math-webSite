//   ██████╗ █████╗ ██╗      ██████╗
//  ██╔════╝██╔══██╗██║     ██╔════╝
//  ██║     ███████║██║     ██║
//  ██║     ██╔══██║██║     ██║
//  ╚██████╗██║  ██║███████╗╚██████╗
//   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝

/**
 * Calcular el perimetro multiplicando por 4 cualquier lado del rombo
 * @param {number} side Cualquier 'lado'
 * @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
 */
const diamondPerimeter = (side) => parseFloat((side * 4).toFixed(2));
/**
 * Calcular la diagonal del rombo a partir del teorema de Pitágoras aislando la diagonal menor o mayor
 * @param {number} side Cualquier 'lado'
 * @param {number} d Cualquier 'diagonal'
 * @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
 */
const diamondDiagonal = (side, d) =>
  parseFloat(Math.sqrt(4 * side ** 2 - d ** 2).toFixed(2));
/**
 * Calcular el area del rombo dividiendo entre 2 el producto de sus diagonales
 * @param {number} D 'Diagonal Mayor'
 * @param {number} d 'Diagonal Menor'
 * @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
 */
const diamondArea = (D, d) => parseFloat(((D * d) / 2).toFixed(2));

export { diamondPerimeter, diamondDiagonal, diamondArea };
