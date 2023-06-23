import Navigation from "../components/Test"
import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { json } from "react-router-dom";

function Cart(){
    const contextData =useContext(FoodContext)
    const {cart, setCart} = contextData;

    const increraseCartItem = (menu) => {
        const existingCartData = [...cart];
        const increasedQty = existingCartData.map((items)=> {
            if(items.id === menu.id){// this is making sure we are getting the particular item in cart we wan to increase 
                menu.quantity += 1;
                menu.totalPrice = menu.price * menu.quantity
            }
            return items
        });
        setCart(increasedQty)
        localStorage.setItem("tk-food", JSON.stringify(increasedQty))
    }
const decreaseCartItem = (menu) => {
    const existingCartData = [...cart];
    const decreaseQty = existingCartData.map((items)=>{
        if(items.id === menu.id){
            if(menu.quantity > 1){
                menu.quantity -= 1;
                menu.totalPrice = menu.price * menu.quantity;
            }
        }
        return items;
    });
    setCart(decreaseQty)
    localStorage.setItem("tk-food", JSON.stringify(decreaseQty))

}

const grandTotal = cart
.map((item)=> item.totalPrice)
.reduce((a, b) =>{
    return a + b;
})


    return(
        <div>
            <Navigation/>
            <div className="page">
                <div className="header">
                    <h2>Cart</h2>
                </div>
                <div className="cart-item">
                    {cart.length ? (
                        <div>
                            <h3>Grand Total: ₦{grandTotal}</h3>
                           { cart.map((item)=>(
                            <div className="cart_item" key={item.id}>
                                    <img src={item.img} alt="cart" />
                                    <div className="cart_details">
                                        <h2>{item.name}</h2>
                                        <h5>Initial price: ₦{item.price}</h5>
                                        <div className="cart_item_btns">
                                            <button onClick={()=> decreaseCartItem(item)}>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={()=> increraseCartItem(item)}>+</button>
                                        </div>
                                        <h4>Total price ₦{item.totalPrice}</h4>
                                    </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p>No Item Currently in cart</p>
                    )}
                </div>

            </div>            
        </div>
    )
}
export default Cart;