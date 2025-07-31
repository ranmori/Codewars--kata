

function dataReverse(data) {
  // Your code here
 let result=[]
  for(let i=0;i<data.length;i+=8){
    let c = data.slice(i,i+8)
    result.push(c)
  }
  
  return result.reverse().flat()
  
}
