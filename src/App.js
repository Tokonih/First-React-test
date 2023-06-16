
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Counter from "./Pages/Counter";
import Aabout from './Afiadinma/About'
import Cont from './Afiadinma/Cont'
import ClassComp from "./Pages/classComp"
import Posts from "./Pages/Posts"
import "./App.css"
import UserDetails from "./Pages/UserDetails";
import FoodDetails from "./FoodDetails";

function App(){
  // let person = "tokonih"
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path ='/Menu' element={<Menu/>}/>
          <Route path ='/Menu/:category/:id' element={<FoodDetails/>}/>
          <Route path= '/Contact' element={<Contact/>}/>
          <Route path= '/Counter' element={<Counter/>}/>
          <Route path= '/Aabout' element={<Aabout/>}/>
          <Route path= '/Cont' element={<Cont/>}/>
          <Route path= '/classComp' element={<ClassComp/>}/>
          <Route path= '/userDetails' element={<UserDetails/>}/>
          <Route path= '/Posts' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
