import React,{useState,useEffect,useRef} from 'react' 
const HookUseRef = () => {
// const[value,setvalue]=useState(0)
// const count = useRef(0);
// useEffect(()=>{
//     count.current =count.current+1
// })

const inputEle = useRef(0);
const btnClicked =()=>
{
    inputEle.current.style.background='red'
}
  return (
    <div>
        <center>
            {/* <button onClick={()=>{setvalue(p=>p-1)}}>-1</button>
            <h2>COUNT : {value}</h2>
            <button onClick={()=>{setvalue(p=>p+1)}}>+1</button>
            <h3>Rendered count -- {count.current}</h3> */}
            <input type='text' ref={inputEle}/>
            <button onClick={btnClicked}>Click</button>
        </center>
    </div>
  )
}
export default HookUseRef