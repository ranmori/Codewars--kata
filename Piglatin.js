


function pigIt(str){
  //Code here
  
 return str

  .split(" ")

  .map(n => {

    if (n.match(/^[a-zA-Z]+$/)) {

      return n.slice(1) + n[0] + "ay";

    } else {

      return n; 

    }

  })

  .join(" ");
  
  
