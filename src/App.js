import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Counter from "./Pages/Counter";
import Aabout from "./Afiadinma/About";
import Cont from "./Afiadinma/Cont";
import ClassComp from "./Pages/classComp";
import Posts from "./Pages/Posts";
import "./App.css";
import UserDetails from "./Pages/UserDetails";
import FoodDetails from "./FoodDetails";
import Cart from "./Pages/Cart";
import FoodProvider from "./context/FoodContext";
import Footer from "./Pages/Footer";

function App() {
  // let person = "tokonih"
  return (
    <FoodProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/:category/:id" element={<FoodDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Aabout" element={<Aabout />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cont" element={<Cont />} />
          <Route path="/classComp" element={<ClassComp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  );
}

export default App;
