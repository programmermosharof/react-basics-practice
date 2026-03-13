import { useEffect, useState } from "react"

export default function Players (){
const [players, setPlayer] = useState();
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setPlayer(data))},[])
    return(
        <div>
            <h1>Players {players.length}</h1>
            {
                players.map(players => <li>{players.name}</li>)
            }
        </div>
    )
}