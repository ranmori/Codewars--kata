


function digPow(n, p){
  // ...
  let total =0
  let k=0
  n.toString().split("")
    .forEach((x)=> {
       x= Number(x)**p
       p++    
       total+=x
  })

  return total%n ===0 ? total /n : -1

  
    
  
}
