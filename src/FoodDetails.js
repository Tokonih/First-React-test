import { useParams } from "react-router-dom";
import Navagation from "./components/Test";
import { useEffect, useState } from "react";
import Btn from "./components/Btn";

function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState({});

  const getFood = () => {
    fetch(`https://free-food-menus-api-production.up.railway.app/our-foods/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFood(data);
        console.log(data)
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div>
      <Navagation />
      <div className="header">
        <h2>{food.name}</h2>
      </div>
      <div className="food-container">
        <img src={food.img} alt="food" />
        <h2>{food.name}</h2>
        <p>{food.dsc}</p>
        <h3>{food.price}</h3>
        <h5>{food.rate}</h5>
        <Btn/>
      </div>
    </div>
  );
}

export default FoodDetails;
