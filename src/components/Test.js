import "./Test.css";
import {Link} from "react-router-dom";

function Test(){
    // const lists = {
    //     padding: "10px",
    //     backgroundColor: "blue", 
    //     color: "white",
    //     margin: "10px",
    //     listStyle:"none"
    // }
    return(
    <header className="Test">
        <h1 style={{color: "white", fontSize: "40px"}}>logo</h1>
        <ul>
            <li className = "lists"> 
            <Link className="Nav-list" to='/'>Home</Link> </li>
            <li className = "lists">
               <Link className="Nav-list"  to='/About'>About</Link> </li>
            <li className = "lists"> 
            <Link className="Nav-list"  to='/Menu'>Menu</Link> </li>
            <li className = "lists"> 
            <Link className="Nav-list"  to='/Contact'>Contact</Link> </li>
            <li className = "lists"> 
            <Link className="Nav-list"  to='/Counter'>Counter</Link> </li>
            {/* <li className = "lists"> 
            <Link className="Nav-list"  to='/Cont'>ACounter</Link> </li>
            <li className = "lists"> 
            <Link className="Nav-list"  to='/Aabout'>Aabout</Link> </li> */}
            <li className = "lists"> 
            <Link className="Nav-list"  to='/classComp'>classComp</Link> </li>
            <li className = "lists"> 
            <Link className="Nav-list"  to='/Posts'>Posts</Link> </li>
        </ul>
    </header>
    )
}

export default Test;