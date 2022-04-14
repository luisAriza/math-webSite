import { shape, shapeTriangule } from "./modules/shapes.js";

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
