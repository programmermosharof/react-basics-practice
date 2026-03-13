
import './App.css'
import Counter from './Counter';

function App() {
  
  function handleClick(){
    alert("Clicked")
  }
  const handleClick5 = (num)=>{
  const number = num + 5;
  alert(number)
  }
  return (
    <>
    <h1>Vite + React</h1>
    <Counter></Counter>
   <div className='card'>
     <button onClick={handleClick}>Click Me</button>
    <button onClick={function handleClick2(){alert('Hi I am Clicked')}}>Click Me</button>
    <button onClick={()=>{
      handleClick5(10)
    }}>Click 5</button>
   </div>
        
    </>
  )
}

export default App
