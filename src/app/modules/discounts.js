//  ██████╗ ██╗███████╗ ██████╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗███████╗
//  ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝██╔════╝
//  ██║  ██║██║███████╗██║     ██║   ██║██║   ██║██╔██╗ ██║   ██║   ███████╗
//  ██║  ██║██║╚════██║██║     ██║   ██║██║   ██║██║╚██╗██║   ██║   ╚════██║
//  ██████╔╝██║███████║╚██████╗╚██████╔╝╚██████╔╝██║ ╚████║   ██║   ███████║
//  ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝

import { getInput } from "./inputFilter.js";
import { discount } from "../calc/calcDiscount.js";

const resultDiscount = () => {
  /** Valores del precio y descuento, guardadas en las propiedades del objeto */
  const input = {
    price: getInput("#priceInput"),
    discount: getInput("#discountInput"),
  };

  document.querySelector(
    "#priceDiscount"
  ).innerHTML = `<span>$</span>${discount(input.price, input.discount)}`;
};
//-----------------------------------------------------------------------------------------------
const cupon = () => {
  /** Codigo del ID "inputCode" convertido en 'String' con .value */
  const inputCode = document.querySelector("#inputCode").value;
  /**
   * Imprimir en los ID's del HTML los mensajes
   * @param {number} ptg 'Porcentaje' de descuento
   * @returns {string} Imprime en el ID del HTML los mensajes de validacion
   */
  const output = (ptg) => {
    document.querySelector(
      "#priceCode"
    ).innerHTML = `<s class="card__product--price-discount"><span>$</span>950</s> <span>$</span>${discount(
      950,
      ptg
    )}`;
    document.querySelector(
      "#validation"
    ).textContent = `Este código aplica un ${ptg}% de descuento`;
  };

  switch (inputCode) {
    case "awesomeGuitar30":
      output(30);
      break;
    case "awesomeGuitar20":
      output(20);
      break;
    case "awesomeGuitar15":
      output(15);
      break;
    default:
      document.querySelector("#priceCode").innerHTML = `<span>$</span>950`;
      document.querySelector("#validation").textContent = `Codigo invalido`;
      break;
  }
};

document.querySelector(".discountCalc").onclick = () => {
  resultDiscount();
};
document.querySelector(".confirmCupon").onclick = () => {
  cupon();
};
