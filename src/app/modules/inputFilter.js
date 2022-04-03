//  ███████╗██╗██╗  ████████╗███████╗██████╗
//  ██╔════╝██║██║  ╚══██╔══╝██╔════╝██╔══██╗
//  █████╗  ██║██║     ██║   █████╗  ██████╔╝
//  ██╔══╝  ██║██║     ██║   ██╔══╝  ██╔══██╗
//  ██║     ██║███████╗██║   ███████╗██║  ██║
//  ╚═╝     ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝

/**
 * Procesar el "input" del archivo HTML y convertir a 'Number' el tipo de dato de entrada
 * @param {string} data Selector (# ó .) + El nombre del input que se desea obtener
 * @return {number} El valor filtrado del input ingresado
 */
export function getInput(data) {
  /** Dato de input obtenido por el parámetro 'data' */
  const inputData = document.querySelector(data);
  /** Valor de 'inputData' convertido de tipo de dato 'String' a 'Number' */
  const filteredInput = Number.parseInt(inputData.value);

  return filteredInput;
}
