import { insert, remove, statistic } from "./modules/statistics.js";

document.querySelector(".insert").onclick = () => {
  insert();
};
document.querySelector(".remove").onclick = () => {
  remove();
};
document.querySelector(".statisticCalc").onclick = () => {
  statistic();
};
