import React from 'react'

const Counter = ({count, handleClick}) => {
  console.log('Counter');
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}> Increase Counter</button>
    </div>
  )
}

export default Counter