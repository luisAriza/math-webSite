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
const diagonalRombo = (lado, diagonal) => Math.sqrt ( 4 * (lado ** 2) - (diagonal ** 2) );
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
    let perimetro = perimetroCuadrado(lado);
    let area = areaCuadrado(lado);
    alert(`Perimetro: ${perimetro}cm \nÁrea: ${area}cm^2`);
}
//Rectangulo
function calcularRectangulo() {
    let long = {
        altura: get('recAltura'),
        base: get('recBase')
    };
    let perimetro = perimetroRectangulo(long.base, long.altura);
    let area = areaRectangulo(long.base, long.altura);
    alert(`Perimetro: ${perimetro}cm \nÁrea: ${area}cm^2`);
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
        alert(`Este es un triangulo equilatero`);
    } 
    else if (triangulo.isoscelesAcutangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        alert(`Este es un triangulo isósceles-acutángulo`);
    }
    else if (triangulo.isoscelesRectangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        alert(`Este es un triangulo rectángulo-isosceles`);
    }
    else if (triangulo.isoscelesObtusangulo == true) {
        altura = alturaTrianguloIsosceles(lado.A, lado.base);
        alert(`Este es un triangulo isosceles-obtusángulo`);
    }
    else if (triangulo.escalenoAcutangulo == true) {
        let semiperimetro = semiperimetroTriangulo(lado.A, lado.B, lado.base);
        altura = alturaTrianguloEscaleno(lado.A, lado.B, lado.base, semiperimetro);
        alert(`Este es un triangulo escaleno-acutángulo`);
    }
    else if (triangulo.escalenoRectangulo == true) {
        altura = alturaTrianguloRectangulo(lado.A, lado.B, lado.base);
        alert(`Este es un triangulo rectángulo-escaleno`);
    }
    else if (triangulo.escalenoObtusangulo == true) {
        let semiperimetro = semiperimetroTriangulo(lado.A, lado.B, lado.base);
        altura = alturaTrianguloEscaleno(lado.A, lado.B, lado.base, semiperimetro);
        alert(`Este es un triangulo escaleno-obtusángulo`);
    } else {
        alert(`Ingresa correctamente todos los lados del triangulo, lee la guía`);
    }
    let perimetro = perimetroTriangulo(lado.A, lado.B, lado.base);
    let area = areaTriangulo(lado.base, altura);
    alert(`Perimetro: ${perimetro}cm \nAltura: ${parseFloat( altura.toFixed(2) )}cm \nArea: ${area}cm^2`);
}
//Rombo
function calcularRombo() {
    let long = {
        lado: get('romLado'),
        diagonal: get('romDiagonal')
    };
    let Diagonal = diagonalRombo(long.lado, long.diagonal);
    let perimetro = perimetroRombo(long.lado);
    let area = areaRombo(Diagonal, long.diagonal);
    alert(`Perimetro: ${perimetro}cm \nDiagonal: ${Diagonal}cm \nÁrea: ${area}cm^2`);
}
//Circulo
function calcularCirculo() {
    let radio = get('cirRadio');
    let perimetro = circunferencia(radio);
    let area = areaCirculo(radio);
    alert(`Circunferencia: ${perimetro}cm \nÁrea: ${area}cm^2`);
}