const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let arr = []
  for (let i = 0; i < email.length; i++) {
    arr.push(email[i])
  }
  arr = arr.reverse()
  let indx = arr.indexOf('@')
  let res = ((arr.slice(0, indx)).reverse()).join('')
  return res
}

module.exports = {
  getEmailDomain
};
