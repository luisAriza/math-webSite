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
    const circunferencia = (radio) => (radio * 2) * Math.PI;
    //Area
    const areaCirculo = (radio) => Math.pow(radio, 2) * Math.PI;