import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import './home.css'
function Home() {
    const [count , setCount] = useState(0)
    
    const [visible, setVisible] = useState("none")
    const increment = ()=>{
        setCount(count + 1)
    }
    // const degrement = ()=>{
    //     setCount(count - 1)
    // }
    const reset =()=>{
      setCount(0)
    }
    const visiblity =()=>{
      setVisible("block")
    }

  return (
    <>
    <div className='container'>
      <h2>Counter App</h2>
      <div className='button' onClick={increment}>
        <h1 className='number'>{count}</h1>
      </div>
      </div>
      <div className='edit-part'>
        <div onClick={reset} className='edit-box'><h4>Reset</h4></div>
        <div className='edit-box' onChange={visiblity}><h4>Set</h4></div>
      </div>
      <div className='set-box'style={{display:visible}}>
        <div  className='selction-wrapper'>
          <div className='selections'>
            <input type="radio" name='set'  id='down'/>
            <label htmlFor="down">Down</label>
          </div>
          <div className='selections'>
            <input type="radio" id='up' name='set'/>
            <label htmlFor="up">Up</label>
          </div>
        </div>
          <input className='input-nb' type="number" />
      </div>
    </>
  )
}

export default Home
