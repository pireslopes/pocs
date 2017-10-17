/**
 * Define e inicializa os vetores
*/
var arrA = [1,2,3,4,5,6];
var arrB = [2,4,6,8,10,12]; 

/**
 * Obtem os valores, armazena o resultado de cada multiplição/iteração 
 * e retorna o produto escalar 
*/
let intScalar = (arrA, arrB) => {
  var intTemp = 0;
  for(var i = 0, z = arrA.length; i < z; i++) {
    for(var j = i; j <= i; j++) {
      val = arrA[i] * arrB[j];
      intTemp += val;	
    }    
  }
  return intTemp;
}
/**
 * Passa os vetores para a função, recebe o retorno e logo o resultado
*/
arrA.arrB = intScalar(arrA, arrB);
console.log(`O produto escalar dos vetores é: ${arrA.arrB}`);