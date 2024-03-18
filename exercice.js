const { initial, result } = require("lodash");

 function capitalize(string){
    let majCaracter = String.fromCharCode(string.charCodeAt(0) - 32);
    let result = string.replace(string[0], majCaracter);
    return result;
  }
  // console.log(capitalize("hello"));

  function reverse(string){
    let result = "";
    for(let i = string.length - 1; i >= 0; i--){
      result = result + string[i]
    }
    return result;
  }
  // console.log(reverse("hello"));


  const calculator = {
    add: function(a, b) {
      return a + b;
    }, 
    substract: function(a, b) {
      return a - b;
    },
    divide: function(a, b) {
      return a / b;
    }, 
    multiply: function(a, b) {
      return a * b;
    } 
  }

  // console.log(calculator.add(1,2));

  //je n'ai pas pris en compte les majuscules pour l'instant
  function caesarCipher(message, key){
    let letterRegex = /[A-Z]/i;
    let criptedMessage = '';
    for(let i = 0; i < message.length; i++){
      let asciiCode = 0;
      if(message[i].match(letterRegex)){
        asciiCode = message.charCodeAt(i);
        asciiCode = asciiCode + key;
        if(asciiCode > 122){
          asciiCode = asciiCode - 26;
        }
        criptedMessage = criptedMessage + String.fromCharCode(asciiCode);
      } else {
        criptedMessage = criptedMessage + message[i];
      }
    }
    return criptedMessage;
  }

  // console.log(caesarCipher("xyz !", 1));

function analyseArray(array){
  const initialValue = 0;
  const total = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  let average = total / array.length;

  let min = array[0];
  for(let number of array){
    if(number < min){
      min = number;
    }
  }
  let max = array[0];
  for(let number of array){
    if(number > max){
      max = number;
    }
  }
  let length = array.length;
  let object = {
    average : average,
    min : min, 
    max : max, 
    length: length
  }
  return object;
}
// console.log(analyseArray([1, 8, 3, 4, 2, 6]));


module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  caesarCipher: caesarCipher,
  calculator: calculator,
  analyseArray: analyseArray
};
