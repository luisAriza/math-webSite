//Código del cuadrado
console.group("Calculo del Cuadrado");
    //Lados
    const ladoCuadrado = 5;
    console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
    //Perimetro
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);
    //Area
    const areaCuadrado = Math.pow(ladoCuadrado, 2);     //El doble asterisco(**) también se puede usar para indicar que es un exponente, asi: const areaCuadrado = ladoCuadrado ** 2;
    console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del triangulo
console.group("Calculo del Triangulo");
    //Lados
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 8;
    console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
    //Perimetro
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`);
    //Area
    const alturaTriangulo = Math.sqrt( (baseTriangulo/2) ** 2 + ladoTriangulo1 ** 2 );      //Este es el calculo para hallar la altura del triangulo
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`El área del triangulo es: ${parseFloat( areaTriangulo.toFixed(2) )}cm^2`);     //parseFloat es para indicar que el numero es decimal y .toFixed(2) es para reducir el numero decimal a solo "2"
console.groupEnd();

//Código del circulo
console.group("Calculo del Circulo");
    //Radio, diámetro y PI
    const radioCirculo = 4;
    const diametroCirculo = radioCirculo * 2;
    const PI = Math.PI;     //Nos da el valor exacto de PI
    console.log(`El radio mide ${radioCirculo}cm y el diámetro del circulo mide ${diametroCirculo}cm`);
    //Circunferencia
    const circunferencia = diametroCirculo * PI;
    console.log(`La circunferencia del circulo es: ${parseFloat( circunferencia.toFixed(2) )}cm`);
    //Area
    const areaCirculo = Math.pow(radioCirculo, 2) * PI;
    console.log(`El area del circulo es: ${parseFloat( areaCirculo.toFixed(2) )}cm^2`)
console.groupEnd();