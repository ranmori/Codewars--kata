


function longestConsec(strarr, k) {
    // your code

  let c;
  let l=""
  // if k=0 ork=-1 return ""
  if(k===0|| k===-1) return ""
  // if k<= 0 or  kis larger then str
  if (k <= 0 || k > strarr.length) return "";
 // Loop throught it and avoid
  for(let i=0;i<=strarr.length - k; i++)
    {
      // i need k element start from 0 to that k and slice then join
      
      c= strarr.slice(i,i+k).join("")
     // if c = 5 is always more than l so we l=c
     // now if c< l we return l always return the longest element
      if(c.length > l.length)  l= c
     } 
  return l
}
