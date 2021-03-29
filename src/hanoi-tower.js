const CustomError = require("../extensions/custom-error");

module.exports  = function calculateHanoi(disksNumber, turnsSpeed) {
let calculation = {};

let turns = 2 ** disksNumber - 1;
let seconds = Math.floor(turns * (3600 / turnsSpeed));

calculation.turns = turns;
calculation.seconds = seconds;

return(calculation)

};
