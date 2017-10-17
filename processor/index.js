
module.exports = (objBody, next) => {
  var arrA = objBody.arrA;
  var arrB = objBody.arrB;
  
  var intTemp = 0;
  for(var i = 0, z = arrA.length; i < z; i++) {
    for(var j = i; j <= i; j++) {
      val = arrA[i] * arrB[j];
      intTemp += val;	
    }    
  }
  next(null, {'O produto escalar dos vetores é ': intTemp});  
};