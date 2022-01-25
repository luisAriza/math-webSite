const lista1 = [
    100,
    200,
    300,
    400,
    500
];
/**
* Calcular el promedio del la lista de array
* @param {string} lista 'Lista' que se va a calcular el promedio
* @return {number} promedio de la lista
*/
const calcularPromedio = (lista) => {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);

    return sumaLista / lista.length;
}