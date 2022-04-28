const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = []
  if (Array.isArray(members)) {
    for (let name of members) {
      if (typeof name == 'string') {
        arr.push(name.replace(/\s/g, '')[0].toUpperCase())
      } else {
        continue
      }
    }
  } else {
    return false
  }
  arr = arr.sort().join('')
  return arr
}

module.exports = {
  createDreamTeam
};
