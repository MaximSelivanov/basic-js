const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693/HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {


  let numsampleActivity = Number(sampleActivity)

  if(typeof sampleActivity == 'string' && typeof numsampleActivity == 'number' && numsampleActivity > 0 && numsampleActivity <= MODERN_ACTIVITY){
    let t = (MODERN_ACTIVITY / numsampleActivity) / K;
    return(Math.ceil(t))
  }
  else {
    return(false)
  }

};
