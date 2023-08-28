import React, {useEffect} from 'react'

const MemoizeTwo = () => {
  const checkForEvenNumbers = (func) =>{
    const cache = {}
    return function(...args){
      const key = JSON.stringify(args)
      console.log(cache[key],'cache key');
      if (cache[key]){
        return cache[key]
      }
      const result = func.apply(this,args);
      cache[key] = result;
      return result
    }
  }
  
    const evenNumebr = (num) =>{
      console.log(num + " Not Caching");
      return num % 2 == 0 ? `${num} is Even Number` : '';
    }
  

  return (
    <div>MemoizeTwo</div>
  )
}

export default MemoizeTwo