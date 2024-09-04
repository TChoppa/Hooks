
import { useState } from 'react';
function App() {
  const[bike,setbike]= useState(
    {
        name:"RoyalEnfield",model:2024
    })
const changeBikeTheme =()=>
  {
      setbike((prevbike)=>{
        return{
          ...prevbike,name:"R15"
        }
      })
  }
  const[time,settime]=useState(12)

  const counter=()=>
  {
    settime(time+12)
  }
  return (
    <div>
     <h1>bike :{bike.name}</h1><br/><br/>
     <button onClick={changeBikeTheme}>press</button><br/>
     <h2>Counter : {time}</h2> 
     <button onClick={counter}>count</button>
    </div>
  );
}
export default App;
