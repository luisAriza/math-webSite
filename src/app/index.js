// ██╗███╗   ██╗██████╗ ███████╗██╗  ██╗
// ██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝
// ██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝
// ██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗
// ██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗
// ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝

import { shape, shapeTriangule } from "./modules/shapes.js";
import { discount, cupon } from "./modules/discounts.js";
import { insert, remove, statistic } from "./modules/statistics.js";

document.querySelector(".squareCalc").onclick = () => {
  shape("squarePerimeter");
  shape("squareArea");
};
document.querySelector(".rectangleCalc").onclick = () => {
  shape("rectanglePerimeter");
  shape("rectangleArea");
};
document.querySelector(".diamondCalc").onclick = () => {
  shape("diamondDiagonal");
  shape("diamondPerimeter");
  shape("diamondArea");
};
document.querySelector(".circleCalc").onclick = () => {
  shape("circumference");
  shape("circleArea");
};
document.querySelector(".triangleCalc").onclick = () => {
  shapeTriangule("triangleHeight");
  shapeTriangule("trianglePerimeter");
  shapeTriangule("triangleArea");
};
//------------------------------------------------------------------
document.querySelector(".discountCalc").onclick = () => {
  discount();
};
document.querySelector(".confirmCupon").onclick = () => {
  cupon();
};
//------------------------------------------------------------------
document.querySelector(".insert").onclick = () => {
  insert();
};
document.querySelector(".remove").onclick = () => {
  remove();
};
document.querySelector(".statisticCalc").onclick = () => {
  statistic();
};
