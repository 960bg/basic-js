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
  switch (members) {
    case null: return false;
    case '': return false;
    case undefined: return false;
  }
  if (!Array.isArray(members)) return false;
  let nameCom = [];
  let command = [];
  for (let i = 0; i < members.length; i++) {
    if (((typeof (+members[i]) == "number") && (!Number.isNaN(+members[i]))) || !(typeof members[i] === 'string')) {
      continue;
    }
    // проверка на undefined
    let str = members[i] || '';
    str = str.trim();
    if (str == '') continue;
    nameCom.push(str.toUpperCase()[0]);
  }

  command = nameCom.sort().join('');
  return command;


}



module.exports = {
  createDreamTeam
};


createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);