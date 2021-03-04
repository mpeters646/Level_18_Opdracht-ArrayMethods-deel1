// Opdracht A
const addTheWordCool = function (array) {
  const newArray = array.push('cool');
  return array;
};
console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'tof']));
// resultaat: ["nice", "awesome", "tof", "cool"]

//  Opdracht B
const amountOfElementsInArray = function (array) {
  return array.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

// Opdracht C
const selectBelgiumFromBenelux = function (array) {
  return array[0];
};
console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg']));
// resultaat: "Belgie"

// Opdracht D
const lastElementInArray = function (array) {
  return array[array.length - 1];
};

console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));
// resultaat: "Schildpad"

//  Opdracht E
const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];

const impeachTrumpSlice = function (array) {
  return array.slice(1);
};
const impeachTrumpSplice = function (array) {
  return array.splice(1, 3);
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// Opdracht F
const stringsTogether = function (array) {
  return array.join(' ');
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));
//resultaat: "Winc Academy is leuk ;-}"

// Opdracht G
const combineArrays = function (arrayA, arrayB) {
  console.log(arrayA.concat(arrayB));
};

combineArrays([1, 2, 3], [4, 5, 6]);
// resultaat: [1,2,3,4,5,6]
