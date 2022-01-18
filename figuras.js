//Código que hace los cálculos matemáticos
//Código del cuadrado
    //Perimetro
    const perimetroCuadrado = (lado) => parseFloat( (lado * 4).toFixed(2) ) ;
    //Area
    const areaCuadrado = (lado) => parseFloat( (Math.pow(lado, 2)).toFixed(2) );

//Código del triangulo
    //Perimetro y semiperimetro
    const perimetroTriangulo = (ladoA, ladoB, base) => parseFloat( (ladoA + ladoB + base).toFixed(2) );
    const semiperimetroTriangulo = (ladoA, ladoB, base) => parseFloat( ((ladoA + ladoB + base)/2).toFixed(2) );
    //Altura de los triángulos
    const alturaTrianguloEquilatero = (lado) => Math.sqrt(3 * lado)/2;
    const alturaTrianguloIsosceles = (lado,base) => Math.sqrt( lado ** 2 - ( (base ** 2)/4 ));
    const alturaTrianguloRectangulo = (ladoA, ladoB, base) => (ladoA * ladoB)/base;
    const alturaTrianguloEscaleno = (ladoA, ladoB, base, semiP) => (2/base) * ( Math.sqrt(semiP * (semiP - ladoA) * (semiP - ladoB) * (semiP - base)) );
    //Area
    const areaTriangulo = (base, altura) => parseFloat( ((base * altura) / 2).toFixed(2) );

//Código del circulo
    //Circunferencia
    const circunferencia = (radio) => parseFloat( ((radio * 2) * Math.PI).toFixed(2) );
    //Area
    const areaCirculo = (radio) => parseFloat( (Math.pow(radio, 2) * Math.PI).toFixed(2) );

//Código que interactuá con HTML
//Cuadrado
    function calcularPerimetroCuadrado() {
        let input = document.getElementById("inputCuadrado");
        //Number.parseFloat es para hacer la conversion de la entrada del tipo de dato String a Number
        let value = Number.parseFloat(input.value);

        let perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }
    function calcularAreaCuadrado() {
        let input = document.getElementById("inputCuadrado");
        let value = Number.parseFloat(input.value);

        let area = areaCuadrado(value);
        alert(area);
    }
//Triangulo
    function calcularPerimetroTriangulo() {
        let lado = {
            a: Number.parseFloat(document.getElementById("inputTrianguloLadoA").value),
            b: Number.parseFloat(document.getElementById("inputTrianguloLadoB").value),
            base: Number.parseFloat(document.getElementById("inputTrianguloBase").value)
        }
        let perimetro = perimetroTriangulo(lado.a, lado.b, lado.base);
        alert(perimetro);
    }
    function calcularAreaTriangulo() {
        let lado = {
            a: Number.parseFloat(document.getElementById("inputTrianguloLadoA").value),
            b: Number.parseFloat(document.getElementById("inputTrianguloLadoB").value),
            base: Number.parseFloat(document.getElementById("inputTrianguloBase").value)
        }
        let altura = alturaTrianguloIsosceles((lado.a || lado.b), lado.base);
        let area = areaTriangulo(lado.base, altura);
        alert(`Area: ${area}cm^2 \nAltura: ${parseFloat( altura.toFixed(2) )}cm`);
    }
//Circulo
    function calcularCircunferencia() {
        let input = document.getElementById("inputCirculo");
        let value = input.value;
        let perimetro = circunferencia(value);
        alert(perimetro);
    }
    function calcularAreaCirculo() {
        let input = document.getElementById("inputCirculo");
        let value = input.value;
        let area = areaCirculo(value);
        alert(area);
    }