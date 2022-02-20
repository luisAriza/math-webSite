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
* @return {number} EL valor de 'inputDatoMediana' convertido a 'Number'
*/
const getInput = () => {
    /** Dato de 'inputDato' obtenido por el ID del elemento HTML */
    const datoInput = document.getElementById("inputDatoMediana");
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
* Calcular la mediana de la lista de datos
* @return {number} La mediana de la lista
*/
const calcularMediana = () => {
    /** Ordenar lista de datos con '.sort' mediante la función de comparación 'fc' */
    lista.sort(fc);
    /** Mitad de la lista, si el resultado es impar 'parseInt' redondea el numero */
    const mitadLista = parseInt(lista.length / 2);
    //Comprobar si la 'lista' dividida en 2 tiene o no residuo
    if(lista.length % 2 === 0) {
        /** La suma de los dos valores del medio entre 2 (promedio) */
        const mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;

        return alert(mediana);
    } else {
        /** El valor de la mitad de la 'lista' */
        const mediana = lista[mitadLista];

        return alert(mediana);
    }
}