
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
str=str.toUpperCase() 

return str.split("").reduce((a,c,i) => {

  if(!a) return false; 

  return str.indexOf(c) === i ;

}, true) 

}
