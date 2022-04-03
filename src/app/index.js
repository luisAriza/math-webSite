// ██╗███╗   ██╗██████╗ ███████╗██╗  ██╗
// ██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝
// ██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝
// ██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗
// ██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗
// ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝

import "../sass/index.scss";
import "../assets/icons/shortcut_icon.svg";

import { shape, shapeTriangule } from "./modules/shapes.js";
import { discount, cupon } from "./modules/discounts.js";
import { insert, remove, statistic } from "./modules/statistics.js";

document.querySelector(".calculateSquare").onclick = () => {
  shape("squarePerimeter");
  shape("squareArea");
};
document.querySelector(".calculateRectangle").onclick = () => {
  shape("rectanglePerimeter");
  shape("rectangleArea");
};
document.querySelector(".calculateDiamond").onclick = () => {
  shape("diamondDiagonal");
  shape("diamondPerimeter");
  shape("diamondArea");
};
document.querySelector(".calculateCircle").onclick = () => {
  shape("circumference");
  shape("circleArea");
};
document.querySelector(".calculateTriangle").onclick = () => {
  shapeTriangule("triangleHeight");
  shapeTriangule("trianglePerimeter");
  shapeTriangule("triangleArea");
};
//------------------------------------------------------------------
document.querySelector(".calculateDiscount").onclick = () => {
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
document.querySelector(".calculateStatistic").onclick = () => {
  statistic();
};
