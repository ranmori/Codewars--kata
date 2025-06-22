
 // Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
//   to lowerCase=> split them => filter sneaky duplicates have i seen it before 
//   am i the last one appearing dada you are a duplicate
//   and them finally count how many times this has happened
  return text.toLowerCase().split('').filter((val, i, arr) => {
    return !!(arr.indexOf(val) !== i && arr.lastIndexOf(val) === i);
  }).length;
}
