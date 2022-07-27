// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(arr, callback) {
  const imprimir = arr.map((element, index, array) => {
    for(let i = 0; i < arr.length; i++){
          return callback(element, index, array)
    }
  })
    return imprimir
}

console.table(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  const imprimir = arrayFilter.filter((element, index, arr) => {
    for(let i = 0; i < array.length; i++){
      return callback(element, index, arr)
    }
  })
  return imprimir
}

console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
const imprimir = array.reduce((element, index, arr) => {
  for(let i = 0; i < array.length; i++){
    return callback(element, index)
  }
})
return imprimir + initialValue
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
