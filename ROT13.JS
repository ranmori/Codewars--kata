


function rot13(str) {
  str= str.split("")
  return str.map(c=>{
      if (/[a-z]/.test(c)){
        let char= c.charCodeAt(0)
       let shifted= ((char  - 97 + 13) % 26) + 97
      return  String.fromCharCode(shifted)
    
   }
    if (/[A-Z]/.test(c)){
        let char= c.charCodeAt(0)
       let shifted= ((char  - 65 + 13) % 26) + 65
      return  String.fromCharCode(shifted)
   }
    
         else{
           return c}
    }).join("")
 
    
  

}
