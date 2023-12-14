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
  let arr=[]
  if(members == [] || members == false || typeof members == 'number' || !Array.isArray(members)){
    return false
  }
  for (let i = 0; i < members.length ; i++) {
    if (typeof members[i] == 'string'){
      arr.push(members[i])
    }
  }
  arr = arr.map((x) => {
    return (x = x.trim().charAt(0).toUpperCase());
  });
  let str;
  str = arr.sort().join('');
  return str;
}

module.exports = {
  createDreamTeam
};
