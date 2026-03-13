import { use } from "react"
import Post from "./post";
export default function Posts({fetchPromise}){
    const posts = use(fetchPromise)
    console.log(posts);
    
 return(
    <div className="card">
        <h1>All Post {posts.length}</h1>
        {
            posts.map(post => <Post post={post}></Post>)
        }
    </div>
 )

}