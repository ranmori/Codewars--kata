




function cakes(recipe, available) {
  
  let result = 10000;
  
  
      

  for (const key in recipe ) {
      if ( !available.hasOwnProperty(key))
        { return 0} else
          {
          if (typeof recipe[key] === 'number' && typeof available[key] === 'number') {

        const divi= Math.floor(available[key] / recipe[key])
          result =Math.min(result, divi)

      } 
  
  }
    }
  return result 
}
