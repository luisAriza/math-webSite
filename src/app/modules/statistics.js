//  ███████╗████████╗ █████╗ ████████╗██╗███████╗████████╗██╗ ██████╗███████╗
//  ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║██╔════╝╚══██╔══╝██║██╔════╝██╔════╝
//  ███████╗   ██║   ███████║   ██║   ██║███████╗   ██║   ██║██║     ███████╗
//  ╚════██║   ██║   ██╔══██║   ██║   ██║╚════██║   ██║   ██║██║     ╚════██║
//  ███████║   ██║   ██║  ██║   ██║   ██║███████║   ██║   ██║╚██████╗███████║
//  ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚══════╝

import { getInput } from "./inputFilter.js";
import { mean, median, mode } from "../calc/calcStatistics.js";

/** Lista de datos para calcular */
const list = [];
/** Imprime en el ID del HTML el contenido de la lista
 * @return {number} Mostrar en pantalla la lista de datos
 */
const printList = () => (document.querySelector("#data").textContent = list);

//------------------------------------------------------------------------------------------------
const insert = () => {
  /** Valor de 'dataInput' guardado en la variable "data" */
  let data = getInput("#dataInput");
  /** Ingresar nuevo valor al final de la lista */
  isNaN(data) === false ? list.push(data) && printList() : "";
};
//------------------------------------------------------------------------------------------------

const remove = () => list.pop() && printList();

//------------------------------------------------------------------------------------------------
const resultStatistic = () => {
  if (isNaN(getInput("#dataInput")) === false) {
    document.querySelector("#median").textContent = median(list);
    document.querySelector("#mean").textContent = mean(list);
    document.querySelector("#mode").textContent = mode(list);
  }
};

document.querySelector(".insert").onclick = () => {
  insert();
};
document.querySelector(".remove").onclick = () => {
  remove();
};
document.querySelector(".statisticCalc").onclick = () => {
  resultStatistic();
};
