import React, { useCallback, useMemo, useState } from 'react'
import HookUseMemo from './HookUseMemo'
import Header from '../Components/Header'

const HookUseCallBack = () => {
    const[value,setvalue]=useState(0)
    const refFun =useCallback(()=>{},[])
  return (
    <center><div>
        <Header refFun={refFun}/>
        <h1>{value}</h1>
        <button onClick={()=> setvalue(p=>p+1)}> click </button>
       </div>
    </center>
  )
}

export default HookUseCallBack