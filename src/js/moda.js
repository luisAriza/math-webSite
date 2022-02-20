const lista = [9, 2, 2, 9, 2, 9, 9, 5, 5, 5, 4, 9, 9, 2, 2, 2, 5, 5, 2, 5, 4, 4];

function calcularModa(arr) {
    /**
    * Funcion de comparación para ordenación natural, la función se encargará de: si devuelve
    * 'true' cambia el orden de a y b, si devuelve 'false' los mantiene igual
    * https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
    * @param {number} a Primer elemento del array filtrado y tomando el tamaño de cuantos elemento hay
    * @param {number} b Segundo elemento del array filtrado y tomando el tamaño de cuantos elemento hay
    * @return {number} la comparación de los 2 array-elementos
    */
    const fc = (a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length;
    
    return arr.sort(fc).pop();
}

console.log(calcularModa(lista));