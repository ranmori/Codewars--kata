var number = function(busStops){
  // Good Luck!
 return busStops.map(num=> num.reduce((acc,curr)=>acc-curr)).reduce((a,b)=>a+b)
}
