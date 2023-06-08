import { Component } from "react";
import Test from "../components/Test";

class ClassComp extends Component{
    render(){
        this.state ={
            person: "johnson",
            point: 0,
            users: ["rose", "james", "john"]
        }
        return(
            <div>
                <Test/>
                <h1>this is class component</h1>
                <h2>{this.state.person}</h2>
                <p>{this.state.point}</p>
                <p>{this.state.users}</p>
                {this.state.users.map((users)=> (
                <p>{users}</p>
                ))}
                <h1>{this.state.users[1]}</h1>

            </div>
        )
    }
}

export default ClassComp;