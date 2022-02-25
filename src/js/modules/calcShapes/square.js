/**
 * Calcular el perimetro multiplicando por 4 cualquier lado del cuadrado
 * @param {number} side Cualquier 'lado'
 * @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
 */
export const squarePerimeter = (side) => parseFloat((side * 4).toFixed(2));
/**
 * Calcular el area elevando al cuadrado cualquier lado del cuadrado
 * @param {number} side Cualquier 'lado'
 * @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
 */
export const squareArea = (side) => parseFloat((side ** 2).toFixed(2));
