const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
//  function repeater(str, options) {
//   let res
//   let newStr = str.toString()
//   let newAddition = options.addition.toString()
//   let sep = '+'
//   let addSep = '|'

//   let addStr = ''

//   if (options.separator) sep = options.separator
//   if (options.additionSeparator) addSep = options.additionSeparator

//   if (options.addition && options.additionRepeatTimes)   addStr = (newAddition + addSep).repeat(options.additionRepeatTimes - 1) + newAddition

//   if (options.repeatTimes) {
//       res = (newStr + addStr + sep).repeat(options.repeatTimes - 1) + newStr + addStr
//   } else {
//     res = addStr
//   }
//   // console.log(res)
// return res
// }


function repeater(str, options) {
  let res
  let sep = '+'
  let addSep = '|'
  let addStr = ''

  if (options.separator) sep = options.separator
  if (options.additionSeparator) addSep = options.additionSeparator

  if (options.addition && options.additionRepeatTimes) {
    addStr = (options.addition + addSep).repeat(options.additionRepeatTimes - 1) + options.addition
  } else if (options.addition && options.additionRepeatTimes == null){
    addStr = (options.addition)
  } else if (options.addition == false) {
    addStr = (options.addition.toString() + addSep).repeat(options.additionRepeatTimes - 1) + options.addition.toString()
  }
      console.log(addStr)

  if (options.repeatTimes) {
      res = (str + addStr + sep).repeat(options.repeatTimes - 1) + str + addStr
  } else {
    res = str + addStr
  }
  console.log(res)
return res
}

module.exports = {
  repeater
};
