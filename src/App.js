import './App.css';
import './ikshana.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App(){
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
return(
  <>
  <Header/>
  <div className='App'>
    <div className='Box'>
    <p>{count}</p>
    <button onClick={handleAdd} className='add'>ADD </button>
    <button onClick={handleSub} className='sub'>SUB </button>
    </div>
  </div>
  <Footer/>
  </>
  );
}

export default App;
