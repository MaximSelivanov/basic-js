const CustomError = require("../extensions/custom-error");

/* module.exports =  */function createDreamTeam(members) {

  let membersArray = members.map(item => item.split(members));
  return(membersArray)

  


  
};

let members = ['Matt', 'Ann', 'Dmitry', 'Max'];
console.log(createDreamTeam(members))

