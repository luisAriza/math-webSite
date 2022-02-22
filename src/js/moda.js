/** Lista de datos para calcular la mediana desordenada */
const lista = [];
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
* @return {number} EL valor de 'inputDatoModa' convertido a 'Number'
*/
const getInput = () => {
    /** Dato de 'inputDato' obtenido por el ID del elemento HTML */
    const datoInput = document.getElementById("inputDatoModa");
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

    return document.getElementById('outputDatos').innerHTML = `(${lista})`;
}
/**
* Eliminar en la lista el ultimo valor e imprimirlo en el archivo HTML
* @return {number} Ultimo dato de la lista eliminado e impreso en el ID 'outputDatos'
*/
const eliminarDato = () => {
    /** Eliminar el ultimo valor de la lista */
    lista.pop();

    return document.getElementById('outputDatos').innerHTML = `(${lista})`;
}

/**
* Calcular la moda de la lista de datos
* @return {number} La moda de la lista
*/
function calcularModa() {
    /** Ordenar lista de datos con '.sort' mediante la función de comparación 'fce' */
    lista.sort(fc);
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

    return alert(moda);
}