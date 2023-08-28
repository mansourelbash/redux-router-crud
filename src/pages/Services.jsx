import React, { useCallback, useMemo, useState, useEffect } from 'react'
import Counter from '../components/Counter';
import CounterText from '../components/CounterText';
import MemoizeTwo from '../components/MemoizeTwo';

const Services = () => {
  const [count, setCount] = useState(0);
  const [items,setItems] = useState(["Mercedes", "Opera", "devices", "geeds"]);
  // const allCars = ["Mercedes", "Opera", "devices"]
  const allCars = useMemo(()=> {return ["Mercedes", "Opera", "devices"]},[])
  
  const obj2 = useMemo(()=> items,[])
  const addNumber = useCallback((num1,num2) =>{
    items.push("Souddd");
    console.log(num1+num2)},[])
    const fetchAndRunCallback = (value, callback) =>{
      callback(value);

    }
    const fetchAllData = async(value) =>{
      const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await reponse.json();
      console.log(json);
      console.log(value + 34)
    }

    useEffect(()=>{
      fetchAndRunCallback(55,fetchAllData)
    },[])
  return (
    <div>
      <Counter count={count}  handleClick={() => setCount(count+1)} />
      <CounterText cars={allCars} text={obj2} addNumber={addNumber}/>
      <MemoizeTwo />
    </div>
  )
}

export default Services