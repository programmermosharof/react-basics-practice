
import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Batsman from './assets/Batsman';
import User from './assets/Users';
import Posts from './Posts';

import Friends from './assets/friends';

// const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// // .then(data => console.log(data)
// // )
// const fetchFriends = async ()=> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')

//   return res.json()

// }

const fetchPosts = async ()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  return res.json()
}
function App() {
  // const friendPromise =fetchFriends();
const fetchPromise = fetchPosts();
  
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
    <Suspense>
      <Posts fetchPromise ={fetchPromise }></Posts>
    </Suspense>

    {/* <Suspense fallback={<h2>Loading...</h2>
    }>
      <User fetchUsers={fetchUsers}></User>
    </Suspense>
    <Suspense fallback={<h2>Wait For Friends</h2>}>

    <Friends friendPromise={friendPromise}></Friends>

    </Suspense>
    
    <Batsman></Batsman>
    <Counter></Counter>
   <div className='card'>
     <button onClick={handleClick}>Click Me</button>
    <button onClick={function handleClick2(){alert('Hi I am Clicked')}}>Click Me</button>
    <button onClick={()=>{
      handleClick5(10)
    }}>Click 5</button>
   </div>
         */}
    </>
  )
}

export default App
