import React, { useMemo, useState } from 'react'

const HookUseMemo = () => {

const[number,setnumber]=useState(0)
const[value,setvalue]=useState(0)
function cube(num)
{  
    console.log("function working fine")
    return Math.pow(num,3)
   
}
//const INum = cube(number)
const INum = useMemo(()=>cube(number),[number])
console.log(INum)
const btnclicked=()=>
{
  return  setvalue(P=>P+1)
}
  return (
    <div>
        <center>
        <input type='number'value={number} onChange={(e)=>setnumber(e.target.value)} ></input>
         <h1>Count of Num : {INum} </h1>
         <button onClick={btnclicked}>count++</button>
         <h1>Countdown : {value}</h1>
         </center>
    </div>
  )
}

export default HookUseMemo