//  ███████╗██╗  ██╗ █████╗ ██████╗ ███████╗███████╗
//  ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝██╔════╝
//  ███████╗███████║███████║██████╔╝█████╗  ███████╗
//  ╚════██║██╔══██║██╔══██║██╔═══╝ ██╔══╝  ╚════██║
//  ███████║██║  ██║██║  ██║██║     ███████╗███████║
//  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚══════╝

import { getInput } from "./inputFilter.js";
import { squarePerimeter, squareArea } from "../calc/calcShapes/square.js";
import {
  rectanglePerimeter,
  rectangleArea,
} from "../calc/calcShapes/rectangle.js";
import {
  trianglePerimeter,
  equilateralTriangleHeight,
  isoscelesTriangleHeight,
  rightTriangleHeight,
  scaleneTriangleHeight,
  triangleArea,
} from "../calc/calcShapes/triangle.js";
import {
  diamondPerimeter,
  diamondDiagonal,
  diamondArea,
} from "../calc/calcShapes/diamond.js";
import { circumference, circleArea } from "../calc/calcShapes/circle.js";

/**
 * Imprime en el 'ID' del HTML el resultado del calculo
 * @param {string} calc nombre del calculo que se desea obtener
 * @return {number} Mostrar en pantalla el resultado del calculo
 */
const shape = (calc) => {
  /** Valores de las longitudes de las figuras, guardadas en las propiedades del objeto */
  const input = {
    sS: getInput("#squareInput"),
    rH: getInput("#rectangleHeightInput"),
    rB: getInput("#rectangleBaseInput"),
    dS: getInput("#diamondSideInput"),
    dD: getInput("#diamondDiagonalInput"),
    cR: getInput("#circleInput"),
  };
  /** Segunda diagonal del rombo, para poder calcular su área */
  const diagonalDiamond = diamondDiagonal(input.dS, input.dD);

  /** Resultados del calculo de las figuras, guardadas en las propiedades del objeto */
  const result = {
    squarePerimeter: `${squarePerimeter(input.sS)}<span>cm</span>`,
    squareArea: `${squareArea(input.sS)}<span>cm<sup>2</sup></span>`,
    rectanglePerimeter: `${rectanglePerimeter(
      input.rB,
      input.rH
    )}<span>cm</span>`,
    rectangleArea: `${rectangleArea(
      input.rB,
      input.rH
    )}<span>cm<sup>2</sup></span>`,
    diamondDiagonal: `${diagonalDiamond}<span>cm</span>`,
    diamondPerimeter: `${diamondPerimeter(input.dS)}<span>cm</span>`,
    diamondArea: `${diamondArea(
      diagonalDiamond,
      input.dD
    )}<span>cm<sup>2</sup></span>`,
    circumference: `${circumference(input.cR)}<span>cm</span>`,
    circleArea: `${circleArea(input.cR)}<span>cm<sup>2</sup></span>`,
  };

  let outputValue = (document.querySelector("#" + calc).innerHTML =
    result[calc]);

  return outputValue;
};

//----------------------------------------------------------------------------------------------------

/**
 * Filtrar el tipo de triangulo dependiendo de la longitud de sus lados, calcular y mostrar en HTML el
 * valor de los 'outputs'
 * @param {string} output 'Nombre de la salida' que se desea obtener
 * @return {number} EL valor del output ingresado
 */
const shapeTriangule = (calc) => {
  /** Valores de los lados a, b y base del triangulo, guardadas en las propiedades del objeto */
  const side = {
    a: getInput("#triangleSideAInput"),
    b: getInput("#triangleSideBInput"),
    base: getInput("#triangleBaseInput"),
  };

  /** Calculo de la hipotenusa de los triángulos rectángulos (isosceles y escaleno) */
  const hypo = {
    isosceles: parseFloat(side.a * Math.sqrt(2).toFixed(1)),
    scalene: Math.ceil(side.a ** 2 + side.b ** 2),
    /** 1.7% menos ó igual a la hipotenusa */
    maxScalene: side.base ** 2,
    /** Margen de error de menos 1.7% */
    minScalene: side.base ** 2 * 0.983,
  };
  const triangle = {
    //Condiciones de tipo equilatero
    equilateral: side.a === side.b && side.b === side.base,
    //Condiciones de tipo isosceles
    isosAcute: side.a === side.b && side.base < hypo.isosceles,
    isosRight: side.a === side.b && side.base == hypo.isosceles,
    isosObtuse: side.a === side.b && side.base > hypo.isosceles,
    //Condiciones de tipo escaleno
    escaAcute:
      side.a < side.b && side.b < side.base && hypo.scalene > hypo.maxScalene,
    escaRight:
      side.a < side.b &&
      hypo.scalene > hypo.minScalene &&
      hypo.scalene <= hypo.maxScalene,
    escaObtuse:
      side.a < side.b && side.b < side.base && hypo.scalene < hypo.maxScalene,
  };

  const semiPerimeter = trianglePerimeter(side.a, side.b, side.base) / 2;
  /**
   * Imprime en el 'ID' del HTML el tipo de triangulo según sus lado
   * @param {string} type Nombre del tipo de triangulo
   * @return {number} Mostrar en pantalla el tipo de triangulo
   */
  const type = (type) =>
    (document.querySelector("#triangleType").innerHTML = ` ${type}`);

  let height;

  if (triangle.equilateral) {
    height = equilateralTriangleHeight(side.a);
    type("Equilatero acutángulo");
  } else if (triangle.isosAcute) {
    height = isoscelesTriangleHeight(side.a, side.base);
    type("Isósceles acutángulo");
  } else if (triangle.isosRight) {
    height = isoscelesTriangleHeight(side.a, side.base);
    type("Rectángulo isósceles");
  } else if (triangle.isosObtuse) {
    height = isoscelesTriangleHeight(side.a, side.base);
    type("Isósceles obtusángulo");
  } else if (triangle.escaAcute) {
    height = scaleneTriangleHeight(side.a, side.b, side.base, semiPerimeter);
    type("Escaleno acutángulo");
  } else if (triangle.escaRight) {
    height = rightTriangleHeight(side.a, side.b, side.base);
    type("Rectángulo escaleno");
  } else if (triangle.escaObtuse) {
    height = scaleneTriangleHeight(side.a, side.b, side.base, semiPerimeter);
    type("Escaleno obtusángulo");
  } else {
    //Si se ingresa un mal dato, mandar una alerta de verificación
    alert(`Ingresa correctamente todos los lados del triangulo, lee la guía`);
  }
  /** Resultados del calculo del triángulo, guardadas en las propiedades del objeto */
  const result = {
    triangleHeight: `${parseFloat(height.toFixed(2))}<span>cm</span>`,
    trianglePerimeter: `${trianglePerimeter(
      side.a,
      side.b,
      side.base
    )}<span>cm</span>`,
    triangleArea: `${triangleArea(
      side.base,
      height
    )}<span>cm<sup>2</sup></span>`,
  };

  let outputValue = (document.querySelector("#" + calc).innerHTML =
    result[calc]);

  return outputValue;
};

export { shape, shapeTriangule };
