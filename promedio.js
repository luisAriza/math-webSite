/**
* Procesar los "inputs" del archivo HTML y convertir a 'Number' el tipo de dato del valor de entrada
* @param {string} medidaFigura 'Nombre de la medida y figura' que se desea obtener
* @return {number} EL valor de la medida ingresada
*/
function getInput(medidaFigura) {
    /** Nombre de ID's de los elementos "input" de HTML, guardadas en las propiedades del objeto */
    const input = {
        datoPromedio: "inputDatos"
    };
    /** Dato de 'input[]' obtenido por el parámetro 'medidaFigura' */
    const datoInput = document.getElementById(input[medidaFigura]);
    /** Valor de 'datoInput' con decimales, convertido de tipo de dato 'String' a 'Number' */
    const valorInputFiltrado = Number.parseFloat(datoInput.value);

    return valorInputFiltrado;
}
function ingresarDato() {
    const dato = getInput('datoPromedio');
    const lista = [];
    
    lista.push(dato);

    return alert(lista);
}
/**
* Calcular el promedio de la lista de array
* @param {array} lista 'Lista de array' la cual se va a calcular el promedio
* @return {number} El promedio de la lista, la suma de la lista sobre el tamaño de la lista
*/
const calcularPromedio = () => {
    const lista = ingresarDato();
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

    return alert(sumaLista / lista.length);
}