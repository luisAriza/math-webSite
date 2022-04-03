//   ██████╗ █████╗ ██╗      ██████╗
//  ██╔════╝██╔══██╗██║     ██╔════╝
//  ██║     ███████║██║     ██║
//  ██║     ██╔══██║██║     ██║
//  ╚██████╗██║  ██║███████╗╚██████╗
//   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝

/**
 * Calcular el promedio de la lista de datos
 * @param {number} list Lista de datos que se va a calcular el promedio
 * @return {number} El promedio de la lista
 */
const mean = (list) => {
  /**
   * Funcion para 'reduce', sumar todos los elementos array
   * @param {number} accumulator numero acumulado o sumado, inicia en la posición 0 del array
   * @param {number} number Siguiente elemento del array
   * @return {number} La función de suma de todos los elementos del array
   */
  let accumulator = (accumulator, number) => accumulator + number;
  /**
   * Suma de todos los elementos del array guardados en la variable 'listSum'.
   * Si el tamaño del array es mayor a 0, hacer la suma del array con '.reduce'. si no, es = 0
   */
  let listSum = list.length > 0 ? list.reduce(accumulator) : 0;
  /** El promedio, redondeado a 2 decimales*/
  let calcMean = parseFloat((listSum / list.length).toFixed(2));

  return calcMean;
};

/**
 * Funcion de comparación para ordenamiento natural
 * https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
 * @param {number} a Primer elemento del array
 * @param {number} b Segundo elemento del array
 * @return {number} La función se encargará de, si devuelve 'true' cambia el orden de a y b,
 * si devuelve 'false' los mantiene igual
 */
const comparativeFunction = (a, b) => a - b;

/**
 * Calcular la mediana de la lista de datos
 * @param {number} list list Lista de datos que se va a calcular la mediana
 * @return {number} La mediana de la lista
 */
const median = (list) => {
  //Ordenar lista con la función 'sort'
  list.sort(comparativeFunction);

  /** Mitad de la lista, si el resultado es impar 'parseInt' redondea el numero */
  let halfList = parseInt(list.length / 2);
  /** La suma de los dos valores del medio entre 2 */
  const median = (list[halfList] + list[halfList - 1]) / 2;
  /** El valor de la mitad de la 'lista' */
  const exactMedian = list[halfList];
  /** Comprobar si la lista tiene una mediana exacta */
  let calcMedian = list.length % 2 === 0 ? median : exactMedian;

  return calcMedian;
};

/**
 * Calcular la moda de la lista de datos
 * @param {number} list list Lista de datos que se va a calcular la moda
 * @return {number} La moda de la lista
 */
const mode = (list) => {
  /**
   * Funcion de comparación para ordenación natural, la función se encargará de: si devuelve
   * 'true' cambia el orden de a y b, si devuelve 'false' los mantiene igual
   * https://lenguajejs.com/javascript/fundamentos/arrays/#funci%C3%B3n-de-comparaci%C3%B3n
   * @param {number} a Primer elemento del array filtrado y tomando el tamaño de cuantos elementos hay
   * @param {number} b Segundo elemento del array filtrado y tomando el tamaño de cuantos elementos hay
   * @return {number} la comparación de los 2 array-elementos
   */
  let cf = (a, b) =>
    list.filter((e) => e === a).length - list.filter((e) => e === b).length;
  //Ubicar al final de la lista el grupo de elementos mas repetido y obtener su ultimo valor
  let calcMode = list.sort(cf).slice(list.length - 1);

  return calcMode;
};

export { mean, median, mode };
