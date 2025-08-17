

function getMiddle(s) {
  //Code goes here!
  let len=s.length
  let mid= Math.floor(len/2)
  if(len%2!==0) return s[mid]
  else return `${s[mid-1]}${s[mid]}`
      
  
      
}
