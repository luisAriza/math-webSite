//Lista desordenada
const lista1 = [500, 1300, 900, 1500, 700, 1100, 100, 300];
//Algoritmo de ordenamiento
for (let i = 0; i < lista1.length - 1; i++) {
    for (let j = 0; j < lista1.length - 1; j++) {
        if (lista1[j] > lista1[j + 1]) {
            const aux = lista1[j];
            lista1[j] = lista1[j + 1];
            lista1[j + 1] = aux;
        }
    }
}
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