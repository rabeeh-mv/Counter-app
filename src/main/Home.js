import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import './home.css'
function Home() {
    const [count , setCount] = useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    // const degrement = ()=>{
    //     setCount(count - 1)
    // }
    const reset =()=>{
      setCount(0)
    }
  return (
    <>
    <div className='container'>
      <h2>Counter App</h2>
      <div className='count-number' onClick={increment}>
        <h1 className='number'>{count}</h1>
      </div>
      </div>
      <div className='edit-part'>
        <div onClick={reset} className='edit-box'><h4>Reset</h4></div>
        <div className='edit-box'><h4>Set</h4></div>
      </div>
    </>
  )
}

export default Home
