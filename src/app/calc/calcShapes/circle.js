//   ██████╗ █████╗ ██╗      ██████╗
//  ██╔════╝██╔══██╗██║     ██╔════╝
//  ██║     ███████║██║     ██║
//  ██║     ██╔══██║██║     ██║
//  ╚██████╗██║  ██║███████╗╚██████╗
//   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝

/**
 * Calcular la circunferencia multiplicando por PI el diametro (doble del radio) del circulo
 * @param {number} r 'Radio'
 * @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
 */
const circumference = (r) => parseFloat((r * 2 * Math.PI).toFixed(2));
/**
 * Calcular el area del circulo multiplicando por PI el producto del radio elevado al cuadrado
 * @param {number} r 'Radio'
 * @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
 */
const circleArea = (r) => parseFloat((Math.pow(r, 2) * Math.PI).toFixed(2));

export { circumference, circleArea };
