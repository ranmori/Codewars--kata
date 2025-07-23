


function calc(expr) {
  // TODO: Your awesome code here
  
    
 let result=[]

  
  expr.trim().split(" ")
   .forEach((n)=>{
    if(!isNaN(n)) result.push(+n)
   else if(n.match(/[+\-*/%]/g)) {
      let b=result.pop()
      let  a= result.pop()
      let op= n
      if(op==="+") result.push(a+b)
      else if(op==="-") result.push(a-b)
      else if(op==="*")result.push(a*b)
      else if (op==="/") result.push(a/b)
      
      }})
  
    
    return (result[0])
   
   
  
  
}
