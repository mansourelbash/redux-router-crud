import React from 'react'

const CounterText = ({text,addNumber, cars}) => {
  console.log('Counter Text');
  return (
    <div>
      {text.toString()}
      {addNumber(4,6)}
      {addNumber(6,2)}
      {cars}

    </div>
  )
}

export default React.memo(CounterText)