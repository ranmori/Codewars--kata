
// a code wars Katz using eulers formula 

function properFractions(n){
  //your code here
  //basically math 😔 
  
  // if n ==1 no positive integers less than but 0 return 0
  if (n===1) return 0;
  
  // using the eulers formula intialize result as n
  let result=n 
  // Loop through to find prime factors 
  // need to find only the square roots upto n
  //assume if n =12  intiaize i=2 
  for (let i=2; i*i<=n;i++) {
    // Check if I is a prime factor if it is entirely divisible by n
         if (n % i === 0)  {
           // apply the formula 
             while (n % i === 0)  n/=i
            result -= result /i
           // if the number is not divisible it ends
  }
    }
  // so n is greater 1 
    if(n>1)
  {
    // apply the formula
    result-=result/n
    }
  // return result
  return result
    
}
