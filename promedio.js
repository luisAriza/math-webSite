const lista1 = [200, 100, 500, 400, 300];
/**
* Calcular el promedio de la lista de array
* @param {array} lista 'Lista de array' la cual se va a calcular el promedio
* @return {number} El promedio de la lista, la suma de la lista sobre el tamaño de la lista
*/
const calcularPromedio = (lista) => {
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

    return sumaLista / lista.length;
}