
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
String.prototype.camelCase=function(){

  //your code 

return  this.split(' ')

 .map((e)=>
  e.charAt(0).toUpperCase() + e.slice(1)).join('')

}
