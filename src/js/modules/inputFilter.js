/**
 * Procesar el "input" del archivo HTML y convertir a 'Number' el tipo de dato de entrada
 * @param {string} data Nombre del 'ID' del input que se desea obtener
 * @return {number} EL valor del input ingresado filtrado
 */
export function getInput(data) {
  /** Dato de input obtenido por el parámetro 'data' */
  const inputData = document.querySelector(data);
  /** Valor de 'inputData' convertido de tipo de dato 'String' a 'Number' */
  const filteredInput = Number.parseInt(inputData.value);

  return filteredInput;
}
