/** Lista de datos para calcular */
const lista = [];
/** Imprime en el ID 'outputDatos' del HTML el contenido de la lista */
const impLista = () => document.getElementById('outputDatos').innerHTML = lista;
/** Imprime en el ID 'outputDatos' del HTML el contenido de la lista */
const impCalculo = (output, calculo) => document.getElementById(output).innerHTML = calculo;
/**
* Funcion de comparación para ordenamiento natural
* https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
* @param {number} a Primer elemento del array
* @param {number} b Segundo elemento del array
* @return {number} La función se encargará de, si devuelve 'true' cambia el orden de a y b,
* si devuelve 'false' los mantiene igual
*/
const fc = (a, b) => a - b;

/**
* Procesar el input del archivo HTML y convertir el tipo de dato
* @return {number} EL valor de 'inputDatoPromedio' convertido a 'Number'
*/
const getInput = () => {
    /** Dato de 'inputDato' obtenido por el ID del elemento HTML */
    const datoInput = document.getElementById("inputDato");
    /** Valor de 'datoInput' con decimales, convertido de tipo de dato 'String' a 'Number' */
    const valorInputFiltrado = Number.parseFloat(datoInput.value);

    return valorInputFiltrado;
}

/**
* Ingresar en la lista un nuevo valor e imprimirlo en el archivo HTML
* @return {number} Nuevo dato ingresado e impreso en el ID 'outputDatos'
*/
const ingresarDato = () => {
    /** Valor de 'inputDato' guardado en la variable "dato" */
    const dato = getInput();
    /** Ingresar el valor de "dato" al final de la lista */
    lista.push(dato);

    return impLista();
}
/**
* Eliminar en la lista el ultimo valor e imprimirlo en el archivo HTML
* @return {number} Ultimo dato de la lista eliminado e impreso en el ID 'outputDatos'
*/
const eliminarDato = () => {
    /** Eliminar el ultimo valor de la lista */
    lista.pop();

    return impLista();
}

/**
* Calcular el promedio de la lista de datos
* @return {number} El promedio de la lista
*/
const calcularPromedio = () => {
    /**
    * Funcion para 'reduce', sumar todos los elementos array
    * @param {number} acumulador numero acumulado o sumado, inicia en la posición 0 del array
    * @param {number} numero siguiente elemento del array
    * @return {number} La función de suma de todos los elementos del array
    */
    const acumular = (acumulador, numero) => acumulador + numero;
    /**
    * Suma de todos los elementos del array guardados en la variable 'sumaLista'.
    * Si el tamaño del array es mayor a 0, hacer la suma del array con '.reduce'. si no, es = 0
    */
    const sumaLista = lista.length > 0 ? lista.reduce(acumular) : 0;
    /** El resultado de la suma de la 'lista' sobre el tamaño de la lista con 2 decimales*/
    const promedio = parseFloat( (sumaLista / lista.length).toFixed(2) );

    return impCalculo('outputPromedio', promedio);
}
/**
* Calcular la mediana de la lista de datos
* @return {number} La mediana de la lista
*/
const calcularMediana = () => {
    /** Ordenar lista de datos con '.sort' mediante la función de comparación 'fc' */
    lista.sort(fc);

    /** Mitad de la lista, si el resultado es impar 'parseInt' redondea el numero */
    const mitadLista = parseInt(lista.length / 2);

    /** La suma de los dos valores del medio entre 2 */
    const medianaCalc = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
    /** El valor de la mitad de la 'lista' */
    const medianaExacta = lista[mitadLista];

    //Comprobar si la 'lista' dividida en 2 tiene o no residuo
    if (lista.length % 2 === 0) return impCalculo('outputMediana', medianaCalc);
    else return impCalculo('outputMediana', medianaExacta);
}
/**
* Calcular la moda de la lista de datos
* @return {number} La moda de la lista
*/
const calcularModa = () => {
    /**
    * Funcion de comparación para ordenación natural, la función se encargará de: si devuelve
    * 'true' cambia el orden de a y b, si devuelve 'false' los mantiene igual
    * https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
    * @param {number} a Primer elemento del array filtrado y tomando el tamaño de cuantos elementos hay
    * @param {number} b Segundo elemento del array filtrado y tomando el tamaño de cuantos elementos hay
    * @return {number} la comparación de los 2 array-elementos
    */
    const fc2 = (a, b) => lista.filter(v => v === a).length - lista.filter(v => v === b).length;
    /** La moda obtenido del ultimo elemento del la lista (el más repetido) */
    const moda = lista.sort(fc2).slice(lista.length - 1);

    return impCalculo('outputModa', moda) && lista.sort(fc);
}

/**
* Enviar al HTML el valor del promedio, la mediana y la moda de la lista de datos ingresada
* @return {number} Todos los calculos de la lista
*/
const calcularTodo = () => calcularPromedio() && calcularMediana() && calcularModa();