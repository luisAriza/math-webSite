/**
* Procesar los "inputs" del archivo HTML y convertir a 'Number' el tipo de dato del valor de entrada
* @param {string} medidaFigura 'Nombre de la medida y figura' que se desea obtener
* @return {number} EL valor de la medida ingresada
*/
function getInput(medidaFigura) {
    /** Nombre de ID's de los elementos "input" de HTML, guardadas en las propiedades del objeto */
    const input = {
        ladoCuadrado: "inputCuadrado",
        alturaRectangulo: "inputRectanguloAltura",
        baseRectangulo: "inputRectanguloBase",
        aLadoTriangulo: "inputTrianguloLadoA",
        bLadoTriangulo: "inputTrianguloLadoB",
        baseTriangulo: "inputTrianguloBase",
        ladoRombo: "inputRomboLado",
        diagonalRombo: "inputRomboDiagonal",
        radioCirculo: "inputCirculo"
    };
    /** Dato de 'input[]' obtenido por el parámetro 'medidaFigura' */
    const datoInput = document.getElementById(input[medidaFigura]);
    /** Valor de 'datoInput' con decimales, convertido de tipo de dato 'String' a 'Number' */
    const valorInputFiltrado = Number.parseFloat(datoInput.value);

    return valorInputFiltrado;
}
//----------------------------------------------------------------------------------------------------
//Código del cuadrado
/**
* Calcular el perimetro multiplicando por 4 cualquier lado del cuadrado
* @param {number} lado Cualquier 'lado'
* @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularPerimetroCuadrado = (lado) => parseFloat( (lado * 4).toFixed(2) );
/**
* Calcular el area elevando al cuadrado cualquier lado del cuadrado
* @param {number} lado Cualquier 'lado'
* @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularAreaCuadrado = (lado) => parseFloat( (lado ** 2).toFixed(2) );
//----------------------------------------------------------------------------------------------------
//Código del rectángulo
/**
* Calcular el perimetro multiplicando por 2 la suma de la base mas la altura del rectángulo
* @param {number} b 'Base'
* @param {number} h 'Altura'
* @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularPerimetroRectangulo = (b, h) => parseFloat( (2 * (b + h)).toFixed(2) );
/**
* Calcular el area del rectángulo multiplicando la base por la altura
* @param {number} b 'Base'
* @param {number} h 'Altura'
* @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularAreaRectangulo = (b, h) => parseFloat( (b * h).toFixed(2) );
//----------------------------------------------------------------------------------------------------
//Código del triangulo
/**
* Calcular el perimetro del triangulo sumando todos sus lados
* @param {number} a 'Cateto a'
* @param {number} b 'Cateto b'
* @param {number} c 'Base' del Triangulo
* @return {number} El resultado de la suma, con solo 2 decimales (en caso de tenerlos)
*/
const calcularPerimetroTriangulo = (a, b, c) => parseFloat( (a + b + c).toFixed(2) );
/**
* Calcular la altura del triangulo equilatero a partir del teorema de Pitágoras
* @param {number} lado Cualquier 'lado'
* @return {number} El resultado de la operación
*/
const calcularAlturaTrianguloEquilatero = (lado) => ( Math.sqrt(3) * lado )/2;
/**
* Calcular la altura del triangulo Isosceles a partir del teorema de Pitágoras
* @param {number} a Cualquier 'cateto'
* @param {number} b 'Base' (lado diferente a los catetos)
* @return {number} El resultado de la operación
*/
const calcularAlturaTrianguloIsosceles = (a, b) => Math.sqrt( (a ** 2) - ( (b ** 2)/4 ) );
/**
* Calcular la altura del triangulo rectángulo a partir del teorema de la altura
* @param {number} a 'Cateto menor'
* @param {number} b 'Cateto Mayor'
* @param {number} c 'Hipotenusa'
* @return {number} El resultado de la operación
*/
const calcularAlturaTrianguloRectangulo = (a, b, c) => (a * b)/c;
/**
* Calcular la altura del triangulo escaleno a partir de la fórmula de Herón
* @param {number} a 'Lado a'
* @param {number} b 'Lado b'
* @param {number} c 'Base'
* @param {number} sP 'Semi-perímetro' (la mitad del perimetro)
* @return {number} El resultado de la operación
*/
const calcularAlturaTrianguloEscaleno = (a, b, c, sP) => (2/c) * ( Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c)) );
/**
* Calcular el area del triangulo dividiendo entre 2 el producto de la base por la altura
* @param {number} b 'Base'
* @param {number} h 'Altura'
* @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularAreaTriangulo = (b, h) => parseFloat( ((b * h)/2).toFixed(2) );
//----------------------------------------------------------------------------------------------------
//Código del rombo
/**
* Calcular el perimetro multiplicando por 4 cualquier lado del rombo
* @param {number} lado Cualquier 'lado'
* @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularPerimetroRombo = (lado) => parseFloat( (lado * 4).toFixed(2) );
/**
* Calcular la diagonal del rombo a partir del teorema de Pitágoras aislando la diagonal menor o mayor
* @param {number} a Cualquier 'lado'
* @param {number} d Cualquier 'diagonal'
* @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularDiagonalRombo = (a, d) => parseFloat( Math.sqrt ( (4 * (a ** 2)) - (d ** 2) ).toFixed(2) );
/**
* Calcular el area del rombo dividiendo entre 2 el producto de sus diagonales
* @param {number} D 'Diagonal Mayor'
* @param {number} d 'Diagonal Menor'
* @return {number} El resultado de la operación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularAreaRombo = (D, d) => parseFloat( ((D * d)/2).toFixed(2) );
//----------------------------------------------------------------------------------------------------
//Código del circulo
/**
* Calcular la circunferencia multiplicando por PI el diametro (doble del radio) del circulo
* @param {number} r 'Radio'
* @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularCircunferencia = (r) => parseFloat( ((r * 2) * Math.PI).toFixed(2) );
/**
* Calcular el area del circulo multiplicando por PI el producto del radio elevado al cuadrado
* @param {number} r 'Radio'
* @return {number} El resultado de la multiplicación, con solo 2 decimales (en caso de tenerlos)
*/
const calcularAreaCirculo = (r) => parseFloat( (Math.pow(r, 2) * Math.PI).toFixed(2) );
//----------------------------------------------------------------------------------------------------
/**
* Calcular y mostrar en HTML el valor de los 'outputs' de las figuras (a excepción del triangulo)
* @param {string} outputFigura 'Nombre de la salida y figura' que se desea obtener
* @return {number} EL valor del output ingresado
*/
function getOutput(outputFigura) {
    /** Valores de las longitudes de las figuras, guardadas en las propiedades del objeto */
    const valor = {
        lC: getInput('ladoCuadrado'),
        aR: getInput('alturaRectangulo'),
        bR: getInput('baseRectangulo'),
        lR: getInput('ladoRombo'),
        dR: getInput('diagonalRombo'),
        rC: getInput('radioCirculo')
    };
    /** Valor del calculo de la segunda diagonal del rombo para calcular su área */
    const DiagonalRombo = calcularDiagonalRombo(valor.lR, valor.dR);
    /**
    * Valor del calculo de diagonal, perimetro y area de las figuras, guardadas en las propiedades
    * del objeto
    */
    const calculo = {
        'diagonalRombo': DiagonalRombo,
        'perimetroCuadrado': calcularPerimetroCuadrado(valor.lC),
        'perimetroRectangulo': calcularPerimetroRectangulo(valor.bR, valor.aR),
        'perimetroRombo': calcularPerimetroRombo(valor.lR),
        'circunferencia': calcularCircunferencia(valor.rC),
        'areaCuadrado': calcularAreaCuadrado(valor.lC),
        'areaRectangulo': calcularAreaRectangulo(valor.bR, valor.aR),
        'areaRombo': calcularAreaRombo(DiagonalRombo, valor.dR),
        'areaCirculo': calcularAreaCirculo(valor.rC)
    };
    /**
    * Escribir en HTML el valor del calculo ingresado en 'outputFigura'; 'outputFigura' tiene el
    * mismo nombre que el ID de HTML
    */
    const valorOutput = document.getElementById(outputFigura).innerHTML = calculo[outputFigura];

    return valorOutput;
}
/**
* Filtrar el tipo de triangulo dependiendo de la longitud de sus lados, calcular y mostrar en HTML el
* valor de los 'outputs'
* @param {string} output 'Nombre de la salida' que se desea obtener
* @return {number} EL valor del output ingresado
*/
function getOutputTriangulo(output) {
    /** Valores de los lados a, b y base del triangulo, guardadas en las propiedades del objeto */
    const lado = {
        a: getInput('aLadoTriangulo'),
        b: getInput('bLadoTriangulo'),
        base: getInput('baseTriangulo')
    };
    /**
    * Calculo de la hipotenusa de los triángulos rectángulos (isosceles y escaleno), guardados
    * en las propiedades del objeto
    */
    const hipo = {
        /**
        * En este tipo de triángulo, la hipotenusa mide √2 veces la longitud de cualquier cateto.
        * El resultado está redondeado a 1 decimal para reducir errores al ingresar el valor
        */
        'isosceles': parseFloat( lado.a * Math.sqrt(2).toFixed(1) ),
        /**
        * El cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.
        * Mat.ceil redondea hacia arriba para reducir errores de calculo al ingresar el valor
        */
        'escaleno': Math.ceil( (lado.a ** 2) + (lado.b ** 2) ),
        /** 1.7% menos ó igual a la hipotenusa */
        'maxEscaleno': lado.base ** 2,
        /** Margen de error de menos 1.7% */
        'minEscaleno': (lado.base ** 2) * 0.983
    };
    /**
    * Condiciones que debe cumplir las longitudes de los lados para saber exactamente el tipo de triangulo,
    * guardadas en las propiedades del objeto
    */
    const triangulo = {
        //Condiciones de tipo equilatero
        'equilatero': lado.a === lado.b && lado.b === lado.base,
        //Condiciones de tipo isosceles
        'isosAcutangulo': lado.a === lado.b && lado.base < hipo.isosceles,
        'isosRectangulo': lado.a === lado.b && lado.base == hipo.isosceles,
        'isosObtusangulo': lado.a === lado.b && lado.base > hipo.isosceles,
        //Condiciones de tipo escaleno
        'escaAcutangulo': lado.a < lado.b && lado.b < lado.base && hipo.escaleno > hipo.maxEscaleno,
        'escaRectangulo': lado.a < lado.b && hipo.escaleno > hipo.minEscaleno && hipo.escaleno <= hipo.maxEscaleno,
        'escaObtusangulo': lado.a < lado.b && lado.b < lado.base && hipo.escaleno < hipo.maxEscaleno
    };
    /** Aquí guardamos el valor de la altura del tipo de triangulo que cumpla la condicion */
    let altura;
    /** Output del ID "tipoTriangulo" del archivo HTML */
    const outputTipoTriangulo = document.getElementById("tipoTriangulo");
    /** Semi-perimetro del triangulo es igual a la mitad del perimetro */
    const semiperimetro = calcularPerimetroTriangulo(lado.a, lado.b, lado.base)/2;
    //Validaciones de los tipos de triángulos
    if (triangulo.equilatero) {
        //Calcular la altura del triangulo equilatero-acutángulo
        altura = calcularAlturaTrianguloEquilatero(lado.a);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Equilatero-acutángulo`;
    }
    else if (triangulo.isosAcutangulo) {
        //Calcular la altura del triangulo isósceles-acutángulo
        altura = calcularAlturaTrianguloIsosceles(lado.a, lado.base);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Isósceles-acutángulo`;
    }
    else if (triangulo.isosRectangulo) {
        //Calcular la altura del triangulo-rectángulo isósceles
        altura = calcularAlturaTrianguloIsosceles(lado.a, lado.base);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Triangulo-rectángulo Isósceles`;
    }
    else if (triangulo.isosObtusangulo) {
        //Calcular la altura del triangulo isósceles-obtusángulo
        altura = calcularAlturaTrianguloIsosceles(lado.a, lado.base);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Isósceles-obtusángulo`;
    }
    else if (triangulo.escaAcutangulo) {
        //Calcular la altura del triangulo escaleno-acutángulo
        altura = calcularAlturaTrianguloEscaleno(lado.a, lado.b, lado.base, semiperimetro);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Escaleno-acutángulo`;
    }
    else if (triangulo.escaRectangulo) {
        //Calcular la altura del triangulo-rectángulo escaleno
        altura = calcularAlturaTrianguloRectangulo(lado.a, lado.b, lado.base);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Triangulo-rectángulo Escaleno`;
    }
    else if (triangulo.escaObtusangulo) {
        //Calcular la altura del triangulo escaleno-obtusángulo
        altura = calcularAlturaTrianguloEscaleno(lado.a, lado.b, lado.base, semiperimetro);
        //Escribir en HTML el tipo de triangulo
        outputTipoTriangulo.innerHTML = `Escaleno-obtusángulo`;
    } else {
        //Si se ingresa un mal dato, mandar una alerta de verificación
        alert(`Ingresa correctamente todos los lados del triangulo, lee la guía`);
    }
    /**Valor del calculo de altura, perimetro y area, guardadas en las propiedades del objeto */
    const calculo = {
        'altura': parseFloat(altura.toFixed(2) ),
        'perimetro': calcularPerimetroTriangulo(lado.a, lado.b, lado.base),
        'area': calcularAreaTriangulo(lado.base, altura)
    };
    /**
    * El parámetro 'output' es el nombre del calculo que se desea obtener; "Triangulo" se
    * concatena con 'output' para formar el nombre del ID de HTML; escribir en HTML el valor del
    * calculo ingresado en 'output'
    */
    const valorOutput = document.getElementById(output + "Triangulo").innerHTML = calculo[output];

    return valorOutput;
}
//----------------------------------------------------------------------------------------------------
//Cuadrado
/**
* Enviar al archivo HTML los valores de salida
* @return {number} Los valores de getOutput a los ID's de salida
*/
const outputCuadrado = () => getOutput("perimetroCuadrado") && getOutput("areaCuadrado");
//----------------------------------------------------------------------------------------------------
//Rectangulo
/**
* Enviar al archivo HTML los valores de salida
* @return {number} Los valores de getOutput a los ID's de salida
*/
const outputRectangulo = () => getOutput("perimetroRectangulo") && getOutput("areaRectangulo");
//----------------------------------------------------------------------------------------------------
//Triangulo
/**
* Enviar al archivo HTML los valores de salida
* @return {number} Los valores de getOutputTriangulo a los ID's de salida
*/
function outputTriangulo() {
    getOutputTriangulo('altura') && getOutputTriangulo('perimetro') && getOutputTriangulo('area');
}
//----------------------------------------------------------------------------------------------------
//Rombo
/**
* Enviar al archivo HTML los valores de salida
* @return {number} Los valores de getOutput a los ID's de salida
*/
const outputRombo = () => getOutput("diagonalRombo") && getOutput("perimetroRombo") && getOutput("areaRombo");
//----------------------------------------------------------------------------------------------------
//Circulo
/**
* Enviar al archivo HTML los valores de salida
* @return {number} Los valores de getOutput a los ID's de salida
*/
const outputCirculo = () => getOutput("circunferencia") && getOutput("areaCirculo");