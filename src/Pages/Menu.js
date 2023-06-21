import Test from "../components/Test";
import { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

function Menu() {


    const [foodArr, setFoodArr] = useState([]);
    const foodCatArr = [
      "bbqs",
      "best-foods",
      "breads",
      "burgers",
      "chocolates",
      "desert",
      "fried-chicken",
      "ice-cream",
      "pizzas",
      "porks",
      "sandwitches",
      "sausage",
      "steaks",
    ];

    // const getMenu = () => {
    //   fetch("https://free-food-menus-api-production.up.railway.app/best-foods")
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //       setFoodArr(data);
    //     });
    // };

    const getCategory = (cat) => {
      fetch(`https://free-food-menus-api-production.up.railway.app/${cat}`)
        .then((resp) => resp.json())
        .then((category) => {
          const foodArr = category.map((food) => {
            return{ ...food, category:cat}
          })
          setFoodArr(foodArr);
          console.log(category);
        });
    };

    const rating = (num) => '⭐'.repeat(num) 


    useEffect(() => {
      getCategory("best-foods");
    }, []);

    const deleteBtn = (id) => {
      const del = foodArr.filter((food) => food.id !== id);
      setFoodArr(del);
      console.log(foodArr.id);
    }

    return (
      <div className="menu-page">
        <Test />;
        <div>
          <h1 className="header">This is Menu</h1>
        </div>

       <div className="display">

       <div className="menu-container">
          <div className="menu-tabs">
            {foodCatArr.map((category, i) => {
              return(
              <button key={i} onClick={() => getCategory(category)}>
                {category}
              </button>
              )
            })}
          </div>
        </div>

        <div className="menus">
          {foodArr.map((food, i) => (
            <Link to={`/menu/${food.category}/${food.id}`}  className="menu" key={i}>
              <img src={food.img} alt="" />
              <h3>{food.name}</h3>
              <p>{food.dsc}</p>
              
              <h4>{food.price}</h4>
              <p>{rating(food.rate)}</p>
              <Btn
                bgColor="#fb4d3b"
                title="Order"
                border="2px solid #fb4d3b"
                padding="15px 20px"
                color="white"
              />
              <Btn
                bgColor="white"
                title="Delete"
                color="red"
                border="2px solid #fb4d3b"
                padding="15px 20px"
                clickFunc={() => deleteBtn(food.id)}
              />
              {/* <button>Order NOw</button> */}
              {/* <button onClick={() => deleteBtn(food.id)}> Delete</button> */}
            </Link>
          ))}

          {/*  */}
        </div>
      </div>
       </div>
    );
  };

export default Menu;
