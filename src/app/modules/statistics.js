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

//----------------------------------------------------------------------------------------------------
const insert = () => {
  /** Valor de 'dataInput' guardado en la variable "data" */
  let data = getInput("#dataInput");
  /** Ingresar nuevo valor al final de la lista */
  list.push(data) && printList();
};
//----------------------------------------------------------------------------------------------------

const remove = () => list.pop() && printList();

//----------------------------------------------------------------------------------------------------
const statistic = () => {
  document.querySelector("#mean").textContent = mean(list);
  document.querySelector("#median").textContent = median(list);
  document.querySelector("#mode").textContent = mode(list);
};

export { insert, remove, statistic };
