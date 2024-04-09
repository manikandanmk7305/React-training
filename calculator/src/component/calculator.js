import React, { useState } from 'react'

export default function Calculator() {
    const[Cal,setCal]=useState('')
    const handleEvaluate=()=>{
        setCal(eval(Cal))
    }
  return (
    <div>
      <br></br><br></br>
      <h3>Simple calculator</h3>      
      <div className='cal-con'>
      <br></br>
        <input type='text' value={Cal}/><br></br>
        <br></br>
        <button onClick={()=>{setCal(prev=>prev+1)}}>1</button>
        <button onClick={()=>{setCal(prev=>prev+2)}}>2</button>
        <button onClick={()=>{setCal(prev=>prev+3)}}>3</button>
        <button onClick={()=>{setCal(prev=>prev+'+')}}>+</button><br></br>
        <button onClick={()=>{setCal(prev=>prev+4)}}>4</button>
        <button onClick={()=>{setCal(prev=>prev+5)}}>5</button>
        <button onClick={()=>{setCal(prev=>prev+6)}}>6</button>
        <button onClick={()=>{setCal(prev=>prev+'-')}}>-</button><br></br>
        <button onClick={()=>{setCal(prev=>prev+7)}}>7</button>
        <button onClick={()=>{setCal(prev=>prev+8)}}>8</button>
        <button onClick={()=>{setCal(prev=>prev+9)}}>9</button>
        <button onClick={()=>{setCal(prev=>prev+'*')}}>*</button><br></br>
        <button onClick={()=>{setCal(prev=>prev+'/')}}>/</button>
        <button onClick={()=>{setCal(prev=>prev+0)}}>0</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => setCal('')}>c</button><br></br>
        <button onClick={()=>{setCal(prev=>prev+0+0)}}>00</button>
        <button onClick={()=>{setCal(prev=>prev+'.')}}>.</button>
        <button className='delbtn' onClick={() => setCal(prev => prev.slice(0, -1))}>del</button>
        {/* <button onClick={()=>{setCal(prev=>prev+'%')}}>%</button> */}
        </div>
    </div>
  )
}
