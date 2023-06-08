import Btn from "./Btn";

// import img from "./img/pic1.jpg";
function Test2() {
  return (
    <div className="banner">
      <div className="banner-">
        <h1>Welcome to TK Nature</h1>
        <p>
          <em>Draw closer to nature</em>
        </p>
        <div className="Banner-btn">
            <Btn title= "view More" bgColor="none" color="white" border="2px solid white" padding="15px 25px" />
            <Btn title= "Menu" bgColor="white" color="black" border="2px solid white" padding="15px 25px"/>

          {/* <button>Order now</button>
          <button>View More</button> */}
        </div>
      </div>
      {/* <img className="backgroundimg" src={img} alt="" /> */}
    </div>
  );
}

export default Test2;
