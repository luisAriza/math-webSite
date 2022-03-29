import { getInput } from "./modules/inputFilter.js";

/**
 * Calcular el precio aplicando el descuento
 * @param {number} price 'Precio' del producto
 * @param {number} discount Porcentaje de 'Descuento' que se le debe aplicar
 * @return {number} El precio del producto con el descuento aplicado
 */
const calcDiscount = (price, discount) => (price * (100 - discount)) / 100;

//----------------------------------------------------------------------------------------------------
document.querySelector(".calculateDiscount").onclick = () => {
  /** Valores del precio y descuento, guardadas en las propiedades del objeto */
  const input = {
    price: getInput("#inputPrice"),
    discount: getInput("#inputDiscount"),
  };

  document.querySelector("#priceDiscount").textContent = calcDiscount(
    input.price,
    input.discount
  );
};
//----------------------------------------------------------------------------------------------------
document.querySelector(".confirm").onclick = () => {
  /** Codigo del ID "inputCode" convertido en 'String' con .value */
  const inputCode = document.querySelector("#inputCode").value;
  /**
   * Imprimir en los ID's del HTML los mensajes
   * @param {number} ptg 'Porcentaje' de descuento
   * @returns {string} Imprime en el ID del HTML los mensajes de validacion
   */
  const output = (ptg) => {
    document.querySelector("#priceCode").innerHTML = `<s>$800</s> <br>
    $${calcDiscount(800, ptg)}`;
    document.querySelector("#validation").textContent = `${ptg}% de descuento`;
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
      document.querySelector("#priceCode").textContent = `$800`;
      document.querySelector("#validation").textContent = `Codigo invalido`;
      break;
  }
};
