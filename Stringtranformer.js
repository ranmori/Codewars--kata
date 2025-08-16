function stringTransformer(str) {
  // Your code here
  let b= str
    .split('')
    .map(ch => ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase())
    .join('')
  

return b.split(" ").reverse().join(" ")
}
