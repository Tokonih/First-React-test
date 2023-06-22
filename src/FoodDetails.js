import {  useParams } from "react-router-dom";
import Navagation from "./components/Test";
import { useEffect, useState } from "react";
import Btn from "./components/Btn";
import { FoodContext } from "./context/FoodContext";
import { useContext } from "react";

function FoodDetails() {
  const { category, id } = useParams();
  const [food, setFood] = useState({});
  const contextData = useContext(FoodContext);
  const {cart, setCart} = contextData

  const getFood = () => {
    fetch(`https://free-food-menus-api-production.up.railway.app/${category}/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFood(data);
        console.log(data)
      });
  };

  const handleCart = (menu) => {
    const existingCartData = [...cart];
    const chaeckIfItemExist = existingCartData.find((item)=>item.id === menu.id);
    if(chaeckIfItemExist){
      alert('item in cart')
      return;
    }
    const newItem = {...menu, quantity:1, totalPrice:menu.price}
    existingCartData.push(newItem)
    setCart(existingCartData)
    localStorage.setItem("tk-food", JSON.stringify(existingCartData))
    alert('item added to cart')
    // setCart(addMenu)
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div>
      <Navagation />
      {/* {food.id:? ( */}
        <div className="header">
        <h2>{food.name}</h2>
      </div>
      <div className="food-container">
        <img src={food.img} alt="food" />
        <h2>{food.name}</h2>
        <p>{food.dsc}</p>
        <h3>{food.price}</h3>
        <h5>{food.rate}</h5>
        <Btn bgColor="green" title="Add to cart" clickFunc={()=> handleCart(food)} />
      </div>
      {/* // ) : null } */}
      
    </div>
  );
}

export default FoodDetails;
