import React, { useEffect, useState } from 'react'

const Setings = ({ addup, setstasus }) => {
    const [value, steValue] = useState(0)
    // const [status, setstatus] = useState(true)
    const update = (bolen) => {
        addup(value)
       bolen ? setstasus(true) :setstasus(false)
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <div className='set-box'>
                <input className='input-nb' type="number"
                    onChange={(e) => { steValue(e.target.value) }} />
                <div className='selction-wrapper'>
                    <div className='selections'>
                        <button onClick={() => update(false)}>Down</button>
                    </div>
                    <div className='selections'>
                        <button onClick={()=>update(true)}>Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Setings
