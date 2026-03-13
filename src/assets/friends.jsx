import { use } from "react"
import Friend from "./Friend"
export default function Friends({friendPromise}){
    const friend = use(friendPromise)
    return(
        <div className="card">
            <h2>Friends {friend.length}</h2>
            {
                friend.map(friend => <Friend friend ={friend}key={friend.id}></Friend>)
            }
           
        </div>
    )
}