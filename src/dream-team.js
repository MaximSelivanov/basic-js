const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let membersArr;
  let team = '';

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        membersArr = members[i].trim().split('');
        team += membersArr[0];
      }
    }
    return team.toUpperCase().split('').sort().join('');
  } 
  else {
    return false;
  }


  

};

