//Código super simplificado con las Arrow Functions
//Código del cuadrado
    //Perimetro
    const perimetroCuadrado = (lado) => lado * 4 ;
    //Area
    const areaCuadrado = (lado) => Math.pow(lado, 2);

//Código del triangulo
    //Perimetro
    const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
    //Area
    //const alturaTriangulo = (lado ,base) => Math.sqrt( (base/2) ** 2 + lado ** 2 );
    const areaTriangulo = (base, altura) => (base * altura) / 2;

//Código del circulo
    //Circunferencia
    const circunferencia = (radio) => parseFloat( ((radio * 2) * Math.PI).toFixed(2) );
    //Area
    const areaCirculo = (radio) => parseFloat( (Math.pow(radio, 2) * Math.PI).toFixed(2) );

//Código que interactuá con HTML
    function calcularPerimetroCuadrado() {
        let input = document.getElementById("inputCuadrado");
        let value = input.value;
        let Perimetro = perimetroCuadrado(value);
        alert(Perimetro);
    }
    function calcularAreaCuadrado() {
        let input = document.getElementById("inputCuadrado");
        let value = input.value;
        let Area = areaCuadrado(value);
        alert(Area);
    }
    function calcularPerimetroTriangulo() {
        
        let Perimetro = perimetroTriangulo();
        alert(Perimetro);
    }
    function calcularAreaTriangulo() {

        let Area = areaTriangulo(value);
        alert(Area);
    }
    function calcularCircunferencia() {
        let input = document.getElementById("inputCirculo");
        let value = input.value;
        let perimetro = circunferencia(value);
        alert(perimetro);
    }
    function calcularAreaCirculo() {
        let input = document.getElementById("inputCirculo");
        let value = input.value;
        let Area = areaCirculo(value);
        alert(Area);
    }