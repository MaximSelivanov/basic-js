const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let catsarr = []
    for (i = 0; i < matrix.length; i++) {
      catsarr = catsarr.concat(matrix[i]);
    }
  
  let cat = '^^';
  let cats = 0;

  for(i = 0; i < catsarr.length; i++) {
    if (catsarr[i] == cat){
    cats++}
  }

  return(cats)

};
