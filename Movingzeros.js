


function moveZeros(arr) {
  let a=[]
  let b=[]
  arr.map(n=> {
    if( n===0) a.push(n)
  else b.push(n)
    })
  return b.concat(a)
    
  
}
