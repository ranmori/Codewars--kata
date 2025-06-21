


function solution(str){
//   declare an empty array
   let arr= [];
//    iterate through it
       for (let i = 0 ;i < str.length ;i+=2){
//          if there is a second character push it to the first one
          if(i+1 < str.length)  { arr.push(str.substring(i, i + 2));}
//          if not add _
          else  {arr.push(str.substring(i) + '_') }
       
     
  }
//   return
         return arr
  
 
  
  
   
}
