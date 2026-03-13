import { useState } from "react";
export default function Counter(){
     const [count , setCount]= useState(0);
     const handleAdd = () => {
        ;
       setCount(count +1)
     }

     const counterStyle ={
        border:'2px solid green'
        }
   
    return(
       
        <div style={counterStyle}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}