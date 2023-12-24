import { useState } from 'react';
import '../components/css/counterbox.css'

export const Counterbox = () => {
   //let count = 0;
  const [count , setcount ] =useState(0)

  function handleAdd(){
    setcount(count+1);
    console.log(count);
  }

  function handleSub(){
    setcount(count-1);
    console.log(count);
  }
    const boxname = 'counter '
  return (
    <div className='counterBox'>
    <h1>{boxname}</h1>
    <p>{count}</p>
    <button onClick={handleAdd} className='add'>ADD </button>
    <button onClick={handleSub} className='sub'>SUB </button>
    </div>
  )
}