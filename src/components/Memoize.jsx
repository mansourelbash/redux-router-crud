import React from 'react'

const Memoize = () => {
  function memoize(func) {
  const cache ={};
  return function (...args){
    const key = JSON.stringify(args);
    if (cache[key]){
      return cache[key]
    }
    const result = func.apply(this,args)
    cache[key] = result
    return result
  }


  }
  function add(a, b) {
    console.log('Adding...');
    return a + b;
  }
  

  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(9,2)); // Adding... 5
  console.log(memoizedAdd(9,2)); // 5 (Returned from the cache)
  console.log(memoizedAdd(9,2)); // Adding... 9
  return (
    <div>Memoize</div>
  )
}

export default Memoize