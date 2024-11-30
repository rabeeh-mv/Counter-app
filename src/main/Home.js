import React, {  useState } from 'react'
// import Button from 'react-bootstrap/Button';
import './home.css'
import Setings from './Setings'
function Home() {
    const [count , setCount] = useState(0)
   
    const [visible, setVisible] = useState(false)
    const [status, setstasus] = useState(true)
  const counder = (stand)=>{
    if (stand === false) {
      degrement()
    }else{
      increment()
    }
  }
  const degrement = ()=>{
    count === 0 ? setCount(0): setCount(count - 1)
}
const increment = ()=>{
  setCount(count + 1)
}

    
    
    const reset =()=>{
      setCount(0)
    }
    const addup = (number)=>{
      const num =parseInt(number)
      console.log(num, typeof num);
      setCount(num)
    }

  return (
    <>
    <div className='container'>
      <h2>Counter App</h2>
      <div className='button' onClick={()=>counder(status)}>
        <h1 className='number'>{count}</h1>
      </div>
      </div>
      <div className='edit-part'>
        <div onClick={reset} className='edit-box'><h4>Reset</h4></div>
        <div className='edit-box' onClick={()=> setVisible(!visible)}><h4>Set</h4></div>
      </div>
      {visible ? <Setings addup={addup} setstasus={setstasus}/> : null}
    </>
  )
}

export default Home
