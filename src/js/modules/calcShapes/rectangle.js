/**
 * Calcular el perimetro multiplicando por 2 la suma de la base mas la altura del rectángulo
 * @param {number} b 'Base'
 * @param {number} h 'Altura'
 * @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
 */
export const rectanglePerimeter = (b, h) =>
  parseFloat((2 * (b + h)).toFixed(2));
/**
 * Calcular el area del rectángulo multiplicando la base por la altura
 * @param {number} b 'Base'
 * @param {number} h 'Altura'
 * @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
 */
export const rectangleArea = (b, h) => parseFloat((b * h).toFixed(2));
