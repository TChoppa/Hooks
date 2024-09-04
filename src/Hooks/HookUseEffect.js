import React, { useEffect } from 'react'
import { useState } from 'react'
const HookUseEffect =()=> {

    const[count , setcount] = useState(0)
    const[name , setname] = useState("Tharun")
    const[name1 , setname1] = useState("Tharun1")
    useEffect(()=>{
        setTimeout(()=>
        {
            setcount(count+1)
        },1000)
    },[name])
    const changename=()=>{
        setname("King.....")
    }
    const changename1=()=>{
        setname("Queens....")
    }
  return (
   <center>
    <div>
        <h1>I'Ve rendered {count} times!</h1>
        <br></br>
        <h2>I am changing my name {name}</h2>
        <button onClick={()=> setname('King')}>click to change</button><button onClick={changename1}>click to change</button>
    </div>
    </center>
  )
}

export default HookUseEffect