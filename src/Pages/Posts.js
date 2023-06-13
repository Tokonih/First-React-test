import Navigation from "../components/Test"
import { useEffect, useState } from "react"

function Posts(){
    const [num, setNum] = useState(0)
    const [person, setPerson] = useState('james')

    useEffect(()=>{
        console.log('you have entered the post page');

        return() => console.log('ypu have left the page')
    }, [num, person])

    return(
        <div>
            <Navigation/>
            <div className="header">
                <h2>Post</h2>
            </div>
            <div className="posts">
                <h2>{num}</h2>
                <h2>{person}</h2>
                <button onClick={()=> setNum(num + 1)}>increase</button>
                <button onClick={()=> setPerson('tokonih')}>increase</button>
            </div>
        </div>
    )

}

export default Posts;