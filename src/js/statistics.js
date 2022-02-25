import { getInput } from "./modules/inputFilter.js";
import { mean, median, mode } from "./modules/calculations.js";

/** Lista de datos para calcular */
const list = [];
/** Imprime en el ID del HTML el contenido de la lista
 * @return {number} Mostrar en pantalla la lista de datos
 */
const printList = () => (document.querySelector("#data").textContent = list);
/**
 * Imprime en el 'ID' del HTML el resultado del calculo
 * @param {string} id Selector (#) y nombre del 'ID' del input que se desea obtener
 * @param {number} calc Funcion del calculo del promedio, mediana o moda
 * @return {number} Mostrar en pantalla el resultado del calculo
 */
const printCalc = (id, calc) => (document.querySelector(id).textContent = calc);

document.querySelector(".insert").onclick = () => {
  /** Valor de 'inputData' guardado en la variable "data" */
  let data = getInput("#inputData");
  /** Ingresar nuevo valor al final de la lista */
  list.push(data) && printList();
};

document.querySelector(".remove").onclick = () => list.pop() && printList();

document.querySelector(".calculate").onclick = () => {
  printCalc("#mean", mean(list));
  printCalc("#mode", mode(list));
  printCalc("#median", median(list));
};
