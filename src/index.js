module.exports = function check(str, bracketsConfig) {
  let arrayOfBrackets=str.split('');
  let config=bracketsConfig;

  for (var i=0; i<arrayOfBrackets.length;i++){
       for (var j=0; j<config.length; j++){
           let openBracket = config[j][0];
           let closeBracket = config[j][1]
           if((arrayOfBrackets[i]===openBracket) && (arrayOfBrackets[i+1]===closeBracket)){
               arrayOfBrackets.splice(i,2);
               i=-1;
           }
           if (arrayOfBrackets.length==0){
               return true;
               }
       }
  }
  return false;
}
