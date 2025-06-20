
// https://www.codewars.com/kata/52a382ee44408cea2500074c/solutions/javascript?filter=me&sort=best_practice&invalids=false
// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:A 1x1 matrix |a| has determinant a.A 2x2 matrix [ [a, b], [c, d] ] or

function determinant(m) {
  // return the determinant of the matrix passed in
  
  if(m.length===1){return m[0][0] }
  if(m.length===2){ return m[0][0]*m[1][1] - m[0][1]*m[1][0]}
   let result=0


 m[0].forEach((el,i)=>{
  let minor = m.slice(1).map(row=>row.filter((_,colindex)=>colindex!==i)) 
      result += determinant(minor) * el *((-1)** i)
  
})



              return result 
};
