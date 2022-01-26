//Ordenar esta vaina
const lista1 = [100, 200, 500, 700, 900, 1100, 1300, 1500];
/**
* Calcular la mediana de la lista de array
* @param {array} lista 'Lista de array' la cual se va a calcular la mediana
* @return {number} La mediana de la lista
*/
const calcularMediana = (lista) => {
    /** Mitad de la lista, si es numero impar 'parseInt' redondea el numero */
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