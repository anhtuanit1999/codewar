a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

Math.sum = function(arr) {
  return arr.reduce((sum, e) => sum + e);
}

function comp(array1, array2){
  if (Array.isArray(array1) && Array.isArray(array2) && array1.length === 0 && array2.length === 0) {
    return true;
  }
  return Array.isArray(array1) && Array.isArray(array2) && array1.length && array2.length ? Math.sum(array2.map((e) => Math.sqrt(e))) === Math.sum(array1) : false;
}

console.log(comp([], []));
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
