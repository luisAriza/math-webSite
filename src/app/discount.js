import { discount, cupon } from "./modules/discounts.js";

document.querySelector(".discountCalc").onclick = () => {
  discount();
};
document.querySelector(".confirmCupon").onclick = () => {
  cupon();
};
