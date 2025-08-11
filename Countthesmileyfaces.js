

function countSmileys(arr) {
  if(arr.length===0) return 0
  //1
 // let count=0
  //let regex= /^[:;][-~]?[)D]$/
 // for(let i=0;i< arr.length;i++){
   //if(regex.test(arr[i])) count++
  //}
  //return count
  //2
 // arr.filter((x)=> (/^[:;][-~]?[)D]$/).test(x) ? count++ :0)
  //return count
  //3
  return arr.reduce((count, x)=> (/^[:;][-~]?[)D]$/).test(x) ? count+1 :count , 0)

  
  
  
}
