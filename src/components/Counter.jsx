import React, {useState} from 'react'

export default function Counter() {
    const handleInc = ()=>{
        setNum(num+1)
    }
    const handleDec = ()=>{
        setNum(num-1)
    }
    const handleReset = ()=>{
        setNum(0)
    }
    const [num, setNum] = useState(0)
  return (
    <>
      <div className="container ">
        <div className="card text-center">
            <div className="card-body">
                <h3>Counter</h3>
                <div className="my-5">
                    <h4>{num}</h4>
                    <button className="btn btn-success mx-2" onClick={handleInc}>Increment</button>
                    <button className="btn btn-danger mx-2" onClick={handleDec} disabled={num===0}>Decrement</button>
                    <button className="btn btn-dark mx-2" onClick={handleReset} disabled={num===0}>Reset</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}