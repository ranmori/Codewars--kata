
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  
let arr=array.filter(num=> num%2!==0).sort((a,b)=>a-b)
let odd =0
let result =[]
 for(let i=0; i< array.length;i++ ) {

    if(array[i]%2 !==0){
     
     result.push(arr[odd])
     odd++
    }
    else{ 
      result.push(array[i])
      } 
  }
  
  return result;
