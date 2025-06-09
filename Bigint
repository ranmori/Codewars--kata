

function add(a, b) {
  
  let res = ""
  let carry =0;
  
  // pad leading zeros
  a= a.padStart(Math.max(a.length,b.length),0)
 b = b.padStart(Math.max(a.length,b.length),0) 
  // Iterate through it from left to right
  for(let i= a.length -1; i >=0;i--)
    {
      //parseing both numbers and add them
     let sum=  parseInt(a[i],10) + parseInt(b[i],10)+ carry ;
      // get the ones digit 
      res= (sum % 10) + res;
      // used for next loop compute carry by dividing  the sum 10
      carry =Math.floor(sum/10);
      }
  // prepend carry to the result 
      if(carry >0) res=  carry + res
      // return
    return res;
  
  
  
  // 8  9
///  +1  7
  //  sum = 9 + 7 + 0 = 16 res = "6" carry = 1
  // sum = 8 + 1 + 1 = 10 res = "06" carry = 1 finally 106
}
