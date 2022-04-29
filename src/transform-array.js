const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let newArr = []
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        newArr.push(arr[i])
        // console.log('   push ' + newArr);
      } else if (typeof arr[i] === 'string') {
        if (arr[i] === `--discard-next` ) {
          i += 2
          // console.log('   ++ ' + newArr);
          continue
        }
        if (arr[i] === `--discard-prev`) {
          newArr.pop() 
          // console.log('   pop ' + newArr);
          continue
        }
        if (arr[i] === `--double-next` ) {
          if (arr[i + 1] === undefined) continue
          newArr.push(arr[i + 1])
          newArr.push(arr[i + 1])
          i += 1
          // console.log('   double ' + newArr);
          continue
        }
        if (arr[i] === `--double-prev`) { 
          if (arr[i-1] === undefined) continue;
          // newArr.push(arr[i - 1])
          if (newArr[newArr.length-1] === arr[i-1]) {
            newArr.push(arr[i-1]);
          } else {
            newArr.push(arr[i-1]);
            newArr.push(arr[i-1]);
          }
          // console.log('   double prev ' + newArr);
          continue
        } else {
          newArr.push(arr[i])
          continue
        }
      } else {
        newArr.push(arr[i])
        continue
      }
    }
  } else {
    throw new Error (`'arr' parameter must be an instance of the Array!`)
  }
  // console.log(newArr)
  return newArr
}

module.exports = {
  transform
};
