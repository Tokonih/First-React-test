import Test from "../components/Test";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const inceaseCounter = () =>{
        setCount(count + 1)
    }

    const reset =() =>{
        setCount(0)
    }

    const decrease =() =>{
        if(count>0){
            setCount(count-1)
        }
       
    }
  return (
    <div>
      <Test />
      <div className="header">
        <h2>Counter Page</h2>
      </div>
      <div className="counter">
        <h2>{count}</h2>
        <div className="counterbtn">
        <button onClick={inceaseCounter}>increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
