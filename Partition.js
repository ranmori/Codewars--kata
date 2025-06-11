



function part(n) {
  // your code
  
  // this was hard 
  // n: The target number to partition.
// max: The largest number you can use in the current step.
// prefix: The current .
//all:The array holding all partitions.
  
  function get(n, max=n, pre=[] , all=[])
       { 
         if(n===0) 
           {
             all.push(pre)
             return}
  for(let i=Math.min(n,max); i>=1; i--) 
      {
        get(n-i , i, [... pre, i] , all)
              }       
}
  let partitions =[]
  get(n,n,[],partitions) 
let result  = partitions.map(el=>el.reduce((a,b)=> a*b,1))
  let newRes= [...new Set(result)].sort((a,b)=>a-b)
  
      let range= newRes[newRes.length-1] - (newRes[0])
       let sum = newRes.reduce((a,b) =>a+b,0)
       let Avg=  sum/newRes.length
       
       
      let mid = Math.floor(newRes.length / 2)
      let median;
        if (newRes.length % 2 === 0) {
           median = (newRes[mid - 1] + newRes[mid]) / 2
          }else {  median = newRes[mid]
}
  return `Range: ${range} Average: ${Avg.toFixed(2)} Median: ${median.toFixed(2)}`
    }
