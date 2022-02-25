//Código del triangulo
/**
 * Calcular el perimetro del triangulo sumando todos sus lados
 * @param {number} a 'Cateto a'
 * @param {number} b 'Cateto b'
 * @param {number} c 'Base' del Triangulo
 * @return {number} El resultado de la suma, con solo 2 decimales (en caso de tenerlos)
 */
export const trianglePerimeter = (a, b, c) =>
  parseFloat((a + b + c).toFixed(2));
/**
 * Calcular la altura del triangulo equilatero a partir del teorema de Pitágoras
 * @param {number} side Cualquier 'lado'
 * @return {number} El resultado de la operación
 */
export const equilateralTriangleHeight = (side) => (Math.sqrt(3) * side) / 2;
/**
 * Calcular la altura del triangulo Isosceles a partir del teorema de Pitágoras
 * @param {number} a Cualquier 'cateto'
 * @param {number} b 'Base' (lado diferente a los catetos)
 * @return {number} El resultado de la operación
 */
export const isoscelesTriangleHeight = (a, b) => Math.sqrt(a ** 2 - b ** 2 / 4);
/**
 * Calcular la altura del triangulo rectángulo a partir del teorema de la altura
 * @param {number} a 'Cateto menor'
 * @param {number} b 'Cateto Mayor'
 * @param {number} c 'Hipotenusa'
 * @return {number} El resultado de la operación
 */
export const rightTriangleHeight = (a, b, c) => (a * b) / c;
/**
 * Calcular la altura del triangulo escaleno a partir de la fórmula de Herón
 * @param {number} a 'Lado a'
 * @param {number} b 'Lado b'
 * @param {number} c 'Base'
 * @param {number} sP 'Semi-perímetro' (la mitad del perimetro)
 * @return {number} El resultado de la operación
 */
export const scaleneTriangleHeight = (a, b, c, semiP) =>
  (2 / c) * Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));
/**
 * Calcular el area del triangulo dividiendo entre 2 el producto de la base por la altura
 * @param {number} b 'Base'
 * @param {number} h 'Altura'
 * @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
 */
export const triangleArea = (b, h) => parseFloat(((b * h) / 2).toFixed(2));
