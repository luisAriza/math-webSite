//Código que hace los cálculos matemáticos
//Código del cuadrado
    //Perimetro
    const perimetroCuadrado = (lado) => parseFloat( (lado * 4).toFixed(2) );
    //Area
    const areaCuadrado = (lado) => parseFloat( (lado ** 2).toFixed(2) );

//Código del triangulo
    //Perimetro y semiperimetro
    const perimetroTriangulo = (ladoA, ladoB, base) => parseFloat( (ladoA + ladoB + base).toFixed(2) );
    const semiperimetroTriangulo = (ladoA, ladoB, base) => parseFloat( ((ladoA + ladoB + base)/2).toFixed(2) );
    //Altura de los triángulos
    const alturaTrianguloEquilatero = (lados) => ( Math.sqrt(3) * lados )/2;
    const alturaTrianguloIsosceles = (lados, base) => Math.sqrt(lados ** 2 - ( (base ** 2)/4 ));
    const alturaTrianguloRectangulo = (catetoMenor, catetoMayor, hipotenusa) => (catetoMenor * catetoMayor)/hipotenusa;
    const alturaTrianguloEscaleno = (ladoA, ladoB, base, semiP) => (2/base) * ( Math.sqrt(semiP * (semiP - ladoA) * (semiP - ladoB) * (semiP - base)) );
    //Area
    const areaTriangulo = (base, altura) => parseFloat( ((base * altura)/2).toFixed(2) );

//Código del circulo
    //Circunferencia
    const circunferencia = (radio) => parseFloat( ((radio * 2) * Math.PI).toFixed(2) );
    //Area
    const areaCirculo = (radio) => parseFloat( (Math.pow(radio, 2) * Math.PI).toFixed(2) );

//Código que interactuá con HTML
    function getInput(lado) {
        let inputs = {
            'cLado': Number.parseFloat(document.getElementById("inputCuadrado").value),
            'tLadoA': Number.parseFloat(document.getElementById("inputTrianguloLadoA").value),
            'tLadoB': Number.parseFloat(document.getElementById("inputTrianguloLadoB").value),
            'tBase': Number.parseFloat(document.getElementById("inputTrianguloBase").value),
            'cRadio': Number.parseFloat(document.getElementById("inputCirculo").value)
        };
        return inputs[lado];
    }
//Cuadrado
    function calcularPerimetroCuadrado() {
        let lado = getInput('cLado');
        let perimetro = perimetroCuadrado(lado);
        alert(perimetro);
    }
    function calcularAreaCuadrado() {
        let lado = getInput('cLado');
        let area = areaCuadrado(lado);
        alert(area);
    }
//Triangulo
    function calcularPerimetroTriangulo() {
        let lado = [getInput('tLadoA'), getInput('tLadoB'), getInput('tBase')];
        let perimetro = perimetroTriangulo(lado[0], lado[1], lado[2]);
        alert(perimetro);
    }
    function calcularAreaTriangulo() {
        let lado = [getInput('tLadoA'), getInput('tLadoB'), getInput('tBase')];

        let hipotenusaIsosceles = parseFloat( lado[0] * Math.sqrt(2).toFixed(1) );
        let hipotenusaEscaleno = lado[0] * 2;

        let triangulo = {
            equilatero: lado[0] === lado[1] && lado[1] === lado[2],
            isoscelesAcut: lado[0] === lado[1] && hipotenusaIsosceles > lado[2],
            isoscelesRect: lado[0] === lado[1] && hipotenusaIsosceles == lado[2],
            isoscelesObtu: lado[0] === lado[1] && hipotenusaIsosceles < lado[2],
            escalenoAcut: lado[0] < lado[1] && lado[0] != lado[2] && lado[1] != lado[2] && hipotenusaEscaleno > lado[2],
            escalenoRect: lado[0] < lado[1] && lado[0] != lado[2] && lado[1] != lado[2] && hipotenusaEscaleno == lado[2],
            escalenoObtu: lado[0] < lado[1] && lado[0] != lado[2] && lado[1] != lado[2] && hipotenusaEscaleno < lado[2]
        };
        if (triangulo.equilatero == true) {
            var altura = alturaTrianguloEquilatero(lado[0]);
            alert(`Este es un triangulo equilatero`);
        } 
        else if (triangulo.isoscelesAcut == true) {
            var altura = alturaTrianguloIsosceles(lado[0], lado[2]);
            alert(`Este es un triangulo isósceles-acutángulo`);
        }
        else if (triangulo.isoscelesRect == true) {
            var altura = alturaTrianguloIsosceles(lado[0], lado[2]);
            alert(`Este es un triangulo rectángulo isosceles`);
        }
        else if (triangulo.isoscelesObtu == true) {
            var altura = alturaTrianguloIsosceles(lado[0], lado[2]);
            alert(`Este es un triangulo isosceles-obtusángulo`);
        }
        else if (triangulo.escalenoAcut == true) {
            let semiperimetro = semiperimetroTriangulo(lado[0], lado[1], lado[2]);
            var altura = alturaTrianguloEscaleno(lado[0], lado[1], lado[2], semiperimetro);
            alert(`Este es un triangulo escaleno-acutángulo`);
        }
        else if (triangulo.escalenoRect == true) {
            var altura = alturaTrianguloRectangulo(lado[0], lado[1], lado[2]);
            alert(`Este es un triangulo rectángulo escaleno`);
        }
        else if (triangulo.escalenoObtu == true) {
            let semiperimetro = semiperimetroTriangulo(lado[0], lado[1], lado[2]);
            var altura = alturaTrianguloEscaleno(lado[0], lado[1], lado[2], semiperimetro);
            alert(`Este es un triangulo escaleno-obtusángulo`);
        } else {
            alert(`Ingresa correctamente todos los lados del triangulo, lee la guía`);
        }
        let area = areaTriangulo(lado[2], altura);
        alert(`Area: ${area}cm^2 \nAltura: ${parseFloat( altura.toFixed(2) )}cm`);
    }
//Circulo
    function calcularCircunferencia() {
        let radio = getInput('cRadio');
        let perimetro = circunferencia(radio);
        alert(perimetro);
    }
    function calcularAreaCirculo() {
        let radio = getInput('cRadio');
        let area = areaCirculo(radio);
        alert(area);
    }