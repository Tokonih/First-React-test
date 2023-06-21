import { useState, createContext, useEffect } from "react";

export const FoodContext = createContext();

function FoodProvider(props){
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        let localStorageCart = JSON.parse(localStorage.getItem("tk-food"))
        setCart(localStorageCart)
    },[])

    return(
       <FoodContext.Provider value={{cart, setCart}}>
        {props.children}
       </FoodContext.Provider> 
    )
}

export default FoodProvider;