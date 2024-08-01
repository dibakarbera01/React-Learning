import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  //let counter =15;

  const addValue = () => {
    console.log(counter)
    //counter += 1; 
    setCounter(counter+1)
  }

  const removeValue=()=>{
    console.log(counter)
    //counter -= 1;
    setCounter(counter-1)
  }
  
  return (
    <>
    <h1>Hooks Learning React</h1>
    <h1>Current Value:{counter}</h1>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
