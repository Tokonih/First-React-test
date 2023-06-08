import Test from "../components/Test";
import img from "../components/img/food.avif";
import img2 from "../components/img/food 2.avif";
import img3 from "../components/img/food 3.avif";
import img4 from "../components/img/chicken peppersoup.avif";
import { useState } from "react";
import Btn from "../components/Btn";

function Menu() {
  const [foodArr, setFoodArr] = useState( [
    {
      id: 1,
      title: "Salad",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#1, 500",
      foodImg: img,
    },
    {
      id: 2,
      title: "Spag",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#3, 500",
      foodImg: img2,
    },
    {
      id: 3,
      title: "Chicken",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#5, 500",
      foodImg: img3,
    },

    {
      id: 4,
      title: "Chicken Pepper soup",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#2, 500",
      foodImg: img4,
    },
  ]);

  const deleteBtn = (id) =>{
    const del = foodArr.filter(food => food.id !== id);
    setFoodArr(del)
    console.log(foodArr.id);
  }

  return (
    <div className="menu-page">
      <Test />
      <div>
        <h1 className="header">This is Menu</h1>
      </div>
      <div className="menus">
        {foodArr.map((food) => (
          <div className="menu" key={food.id}>
            <img src={food.foodImg} alt="" />
            <h3>{food.title}</h3>
            <p>{food.description}</p>
            <h4>{food.price}</h4>
            <Btn bgColor="#fb4d3b" title="Order" border="2px solid #fb4d3b" padding="15px 20px" color="white"/>
            <Btn bgColor="#fb4d3b" title="Delete" color = "red" border="2px solid #fb4d3b" padding="15px 20px"  clickFunc={() => deleteBtn(food.id)}/>
            {/* <button>Order NOw</button> */}
            {/* <button onClick={() => deleteBtn(food.id)}> Delete</button> */}
          </div>
        ))}

        {/*  */}
      </div>
    </div>
  );
}
export default Menu;
