

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
function alphabetPosition(text) {
  
let result = text.toLowerCase().split('').filter(m => m >= 'a' && m <= 'z')
  .map(m => m.charCodeAt(0) - 'a'.charCodeAt(0) + 1).join(' ');


return result || ''


// that lowercase made me stressed. ''( 


}
