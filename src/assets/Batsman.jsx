import { useState } from "react"

export default function Batsman (){
    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0)
    const handleSingle = () =>{
        setRun(run + 1)
    }
      const handleFour = () => {
        setFour(four + 1)
        setRun(run + 4)
    }
    const handleSix = () => {
        setSix(six +1)
        setRun(run + 6)
    }
    return(
        <div>
            <h2>Player: Bangla Batsman</h2>
            
            {
                run > 100 && <p>Your Score: 100</p>
            }
            {
                four > 1 && <p>Total Four:{four}</p>
            }
            {
              six >1 && <p>Total Six:{six} </p>
            }

            <h1>Score: {run}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}