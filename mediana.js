/** Lista de array desordenada */
const lista1 = [500, 1300, 900, 1500, 700, 1100, 100, 300];
/**
* Funcion de comparación para ordenación natural
* https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
* @param {number} a Primer elemento del array
* @param {number} b Segundo elemento del array
* @return {number} La función se encargará de, si devuelve 'true' cambia el orden de a y b,
* si devuelve 'false' los mantiene igual
*/
const fc = (a, b) => a - b;
//Ordenar lista de array con '.sort' mediante la función de comparación 'fc'
lista1.sort(fc);
/**
* Calcular la mediana de la lista de array
* @param {array} lista 'Lista de array' la cual se va a calcular la mediana
* @return {number} La mediana de la lista
*/
const calcularMediana = (lista) => {
    /** Mitad de la lista, si el resultado es impar 'parseInt' redondea el numero */
    const mitadLista = parseInt(lista.length / 2);
    //Comprobar si la 'lista' dividida en 2 tiene o no residuo
    if(lista.length % 2 === 0) {
        /** La suma de los dos valores del medio entre 2 (promedio) */
        const mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;

        return mediana;
    } else {
        /** El valor de la mitad de la 'lista' */
        const mediana = lista[mitadLista];
        return mediana;
    }
}