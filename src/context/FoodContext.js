import { useState, createContext, useEffect } from "react";

export const FoodContext = createContext();

function FoodProvider(props){
    const [cart, setCart] = useState([]);
    let localData = JSON.parse(localStorage.getItem("tk-food"))
    useEffect(()=>{
        if (localData){
            setCart(localData)
        }
    },[])

    return(
       <FoodContext.Provider value={{cart, setCart}}>
        {props.children}
       </FoodContext.Provider> 
    )
}

export default FoodProvider;