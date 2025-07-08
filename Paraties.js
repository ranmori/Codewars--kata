


function findOutlier(integers){
  //your code here
  
 

  const parities = integers.slice(0, 3).map(n => Math.abs(n % 2));

  const IsOdd = parities.filter(p => p === 1).length >= 2;

  return integers.find(n => Math.abs(n % 2) !== (IsOdd ? 1 : 0));


}
