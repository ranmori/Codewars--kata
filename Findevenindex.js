



function findEvenIndex(arr) {
  //Code goes here!
  // declare left and right
  let right;
  let left;
  // Loop through the array
  for(let i=0; i< arr.length; i++)
    {
      //everything from that index to left sum them
         left =arr.slice(0,i).reduce((a,b)=>a+b,0)
       // everything from that I to the right end sum them
      right=arr.slice(i+1).reduce((a,b)=>a+b,0)
     // The same return i
      if(left===right) return i
      }
  // if all fails return -1
  return -1
}
