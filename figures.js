//Código que hace los cálculos matemáticos
//Código del cuadrado
    //Perimetro
const perimetroCuadrado = (lado) => parseFloat( (lado * 4).toFixed(2) );
    //Area
const areaCuadrado = (lado) => parseFloat( (lado ** 2).toFixed(2) );

//Código del rectángulo
    //Perimetro
const perimetroRectangulo = (base, altura) => parseFloat( ((altura * 2) + (base * 2)).toFixed(2) );
    //Area
const areaRectangulo = (base, altura) => parseFloat( (base * altura).toFixed(2) );

//Código del triangulo
    //Perimetro y semiperimetro
const perimetroTriangulo = (ladoA, ladoB, base) => parseFloat( (ladoA + ladoB + base).toFixed(2) );
const semiperimetroTriangulo = (ladoA, ladoB, base) => parseFloat( ((ladoA + ladoB + base)/2).toFixed(2) );
    //Altura de los diferentes tipos de triángulos
const alturaTrianguloEquilatero = (lado) => ( Math.sqrt(3) * lado )/2;
const alturaTrianguloIsosceles = (lado, base) => Math.sqrt( (lado ** 2) - ( (base ** 2)/4 ) );
const alturaTrianguloRectangulo = (catetoMenor, catetoMayor, hipotenusa) => (catetoMenor * catetoMayor)/hipotenusa;
const alturaTrianguloEscaleno = (ladoA, ladoB, base, sP) => (2/base) * ( Math.sqrt(sP * (sP - ladoA) * (sP - ladoB) * (sP - base)) );
    //Area
const areaTriangulo = (base, altura) => parseFloat( ((base * altura)/2).toFixed(2) );

//Código del rombo
    //Perimetro
const perimetroRombo = (lado) => parseFloat( (lado * 4).toFixed(2) );
    //Diagonal
const diagonalRombo = (lado, diagonal) => parseFloat( Math.sqrt ( 4 * (lado ** 2) - (diagonal ** 2) ).toFixed(2) );
    //Area
const areaRombo = (diagonalMayor, diagonalMenor) => parseFloat( ((diagonalMayor * diagonalMenor)/2).toFixed(2) );

//Código del circulo
    //Circunferencia
const circunferencia = (radio) => parseFloat( ((radio * 2) * Math.PI).toFixed(2) );
    //Area
const areaCirculo = (radio) => parseFloat( (Math.pow(radio, 2) * Math.PI).toFixed(2) );

//Código que interactuá con HTML
function get(value) {
    let input = {
        'cuaLado': Number.parseFloat(document.getElementById("inputCuadrado").value),
        'recAltura': Number.parseFloat(document.getElementById("inputRectanguloAltura").value),
        'recBase': Number.parseFloat(document.getElementById("inputRectanguloBase").value),
        'tLadoA': Number.parseFloat(document.getElementById("inputTrianguloLadoA").value),
        'tLadoB': Number.parseFloat(document.getElementById("inputTrianguloLadoB").value),
        'tBase': Number.parseFloat(document.getElementById("inputTrianguloBase").value),
        'romLado': Number.parseFloat(document.getElementById("inputRomboLado").value),
        'romDiagonal': Number.parseFloat(document.getElementById("inputRomboDiagonal").value),
        'cirRadio': Number.parseFloat(document.getElementById("inputCirculo").value)
    };
    let hipo = {
        'isosceles': parseFloat( input['tLadoA'] * Math.sqrt(2).toFixed(1) ),
        'minimoEsca': (input['tBase'] ** 2) * 0.983,
        'resultadoEsca': Math.ceil( (input['tLadoA'] ** 2) + (input['tLadoB'] ** 2) ),
        'realEsca': input['tBase'] ** 2
    };
    let tipoTriangulo = {
        'equilatero': input['tLadoA'] === input['tLadoB'] && input['tLadoB'] === input['tBase'],
        //Isosceles
        'isosAcut': input['tLadoA'] === input['tLadoB'] && input['tBase'] < hipo['isosceles'],
        'isosRect': input['tLadoA'] === input['tLadoB'] && input['tBase'] == hipo['isosceles'],
        'isosObtu': input['tLadoA'] === input['tLadoB'] && input['tBase'] > hipo['isosceles'],
        //Escaleno
        'escaAcut': input['tLadoA'] < input['tLadoB'] && input['tLadoB'] < input['tBase'] && hipo['resultadoEsca'] > hipo['realEsca'],
        'escaRect': input['tLadoA'] < input['tLadoB'] && hipo['resultadoEsca'] > hipo['minimoEsca'] && hipo['resultadoEsca'] <= hipo['realEsca'],
        'escaObtu': input['tLadoA'] < input['tLadoB'] && input['tLadoB'] < input['tBase'] && hipo['resultadoEsca'] < hipo['realEsca']
    };
    return input[value] || tipoTriangulo[value];
}
//Cuadrado
function calcularCuadrado() {
    let lado = get('cuaLado');
    document.getElementById("perimetroCuadrado").innerHTML = perimetroCuadrado(lado);
    document.getElementById("areaCuadrado").innerHTML = areaCuadrado(lado);
}
//Rectangulo
function calcularRectangulo() {
    let long = {
        altura: get('recAltura'),
        base: get('recBase')
    };
    document.getElementById("perimetroRectangulo").innerHTML = perimetroRectangulo(long.base, long.altura);
    document.getElementById("areaRectangulo").innerHTML = areaRectangulo(long.base, long.altura);
}
//Triangulo
function calcularTriangulo() {
    let altura;
    let lado = {
        A: get('tLadoA'),
        B: get('tLadoB'),
        base: get('tBase')
    };
    let triangulo = {
        equilatero: get('equilatero'),
        isoscelesAcutangulo: get('isosAcut'),
        isoscelesRectangulo: get('isosRect'),
        isoscelesObtusangulo: get('isosObtu'),
        escalenoAcutangulo: get('escaAcut'),
        escalenoRectangulo: get('escaRect'),
        escalenoObtusangulo: get('escaObtu')
    };
    if (triangulo.equilatero == true) {
        altura = alturaTrianguloEquilatero(lado.A);
        document.getElementById("tipoTriangulo").innerHTML = `Equilatero`;
    } 
    else if (triangulo.isoscelesAcutangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        document.getElementById("tipoTriangulo").innerHTML = `Isósceles-acutángulo`;
    }
    else if (triangulo.isoscelesRectangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        document.getElementById("tipoTriangulo").innerHTML = `Triangulo-rectángulo Isósceles`;
    }
    else if (triangulo.isoscelesObtusangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        document.getElementById("tipoTriangulo").innerHTML = `Isósceles-obtusángulo`;
    }
    else if (triangulo.escalenoAcutangulo == true) {
        let semiperimetro = semiperimetroTriangulo(lado.A, lado.B, lado.base);
        altura = alturaTrianguloEscaleno(lado.A, lado.B, lado.base, semiperimetro);
        document.getElementById("tipoTriangulo").innerHTML = `Escaleno-acutángulo`;
    }
    else if (triangulo.escalenoRectangulo == true) {
        altura = alturaTrianguloRectangulo(lado.A, lado.B, lado.base);
        document.getElementById("tipoTriangulo").innerHTML = `Triangulo-rectángulo Escaleno`;
    }
    else if (triangulo.escalenoObtusangulo == true) {
        let semiperimetro = semiperimetroTriangulo(lado.A, lado.B, lado.base);
        altura = alturaTrianguloEscaleno(lado.A, lado.B, lado.base, semiperimetro);
        document.getElementById("tipoTriangulo").innerHTML = `Escaleno-obtusángulo`;
    } else {
        alert(`Ingresa correctamente todos los lados del triangulo, lee la guía`);
    }
    document.getElementById("perimetroTriangulo").innerHTML = perimetroTriangulo(lado.A, lado.B, lado.base);
    document.getElementById("alturaTriangulo").innerHTML = parseFloat( altura.toFixed(2) );
    document.getElementById("areaTriangulo").innerHTML = areaTriangulo(lado.base, altura);
}
//Rombo
function calcularRombo() {
    let long = {
        lado: get('romLado'),
        diagonal: get('romDiagonal')
    };
    let Diagonal = diagonalRombo(long.lado, long.diagonal);
    document.getElementById("perimetroRombo").innerHTML = perimetroRombo(long.lado);
    document.getElementById("diagonalRombo").innerHTML = Diagonal;
    document.getElementById("areaRombo").innerHTML = areaRombo(Diagonal, long.diagonal);
}
//Circulo
function calcularCirculo() {
    let radio = get('cirRadio');
    document.getElementById("circunferencia").innerHTML = circunferencia(radio);
    document.getElementById("areaCirculo").innerHTML = areaCirculo(radio);
}