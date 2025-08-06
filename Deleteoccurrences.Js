

function deleteNth(arr,n){
  // ...
  let re=[]
  let count={}
  for(let i=0; i<arr.length;i++){
    let num = arr[i]
    count[num]= count.hasOwnProperty(num) ? count[num] +1 :1
    if(count[num]<=n) {
      re.push(num)   
    }
    }
    return re
    
}
