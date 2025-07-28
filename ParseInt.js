

function parseInt(string) {
  // TODO: it's your task now
  // declare the intial score zndtotal
  let score=0;
  let total=0
  // an object dictionary
  const dict = {
    "zero": 0,
    "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
    "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,
    "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
    "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90,
    "hundred": 100, "thousand": 1000, "million": 1000000

  };
  // remove and dashes also tolowercase
  let word = string.toLowerCase().replace(/-/g, " ").replace(/ and /g, " ").split(" ");
 //  
  word.forEach((word)=>{
   // if dict[ten]==10 lookup the dictionary up to 99
    if(dict[word] < 100) score+=dict[word]
    // gotta multiply after that
    else if(word==="hundred") score*=100
    // reset score so I not to double add
    else if(word==="thousand") {total+=score*1000; score=0}
    else if(word==="million") {total+=score*1000000; score=0}
      
    })
             // add all  
  return total+score
  
  
  
  
  
  
}
