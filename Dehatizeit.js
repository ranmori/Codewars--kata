

function dashatize(num) {
 // let l= num.toString().length-1 
 return num.toString()
   .split("")
   .map((x,i)=> {
     if(Number(x)% 2 
         ) return `-${x}-`
    else return x
  }).join('')
  .replace(/--+/g,'-')
  .replace(/^-|-$/g,'')
  
  
                               
  
}
