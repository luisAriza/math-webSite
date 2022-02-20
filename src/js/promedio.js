/** Lista de datos para calcular el promedio */
const lista = [];

/**
* Procesar el input del archivo HTML y convertir el tipo de dato
* @return {number} EL valor de 'inputDatoPromedio' convertido a 'Number'
*/
const getInput = () => {
    /** Dato de 'inputDato' obtenido por el ID del elemento HTML */
    const datoInput = document.getElementById("inputDatoPromedio");
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
    /** El resultado de la suma de la 'lista' sobre el tamaño de la lista */
    const promedio = sumaLista / lista.length;

    return alert(promedio);
}