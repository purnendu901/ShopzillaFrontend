
import './App.css';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Components/Signup';
import About from './Components/About';
import { Notecontext } from './Context/Notecontext';

import Footer from './Components/Footer';
import Alert from './Components/Alert';
import Addproduct from './Components/Addproduct';
import ProductsOfaSeller from './Components/ProductsOfaSeller';
import Accountdetails from './Components/Accountdetails';
import Home from './Components/Home';
import NavbarBuyer from './Components/NavbarBuyer';
import YourCart from './Components/YourCart';
import ProductDetails from './Components/ProductDetails';
import Searchedproduct from './Components/Searchedproduct';
import { useState } from 'react';
import Setting from './Components/Setting';
import CategoryCards from './Components/CategoryCards';



function App() {

    const [type, settype] = useState('')
    const [message, setmessage] = useState('')
    const [display, setdisplay] = useState('d-none')

    const showalert=(type,message)=>{
      settype(type)
      setmessage(message)
      setdisplay('d-block')
      
      setTimeout(() => {
        settype('')
        setmessage('')
        setdisplay('d-none')
  
        
      }, 3000);

    }

  return (

    <Notecontext>
    <HashRouter>
      


      


      {!localStorage.getItem("type")?<NavbarBuyer alert={showalert} />:localStorage.getItem("type")==='seller'?<Navbar alert={showalert} />:<NavbarBuyer alert={showalert} />}
      {/* <Navbar alert={showalert}/> */}
      {/* <NavbarBuyer alert={showalert}/> */}
      <Alert type={type} message={message} display={display} />
      <Routes>

      <Route exact path="/" element={<Home alert={showalert}/>}/>
      <Route exact path="/signin" element={<Signin alert={showalert}/>}/>
      <Route exact path="/signup" element={<Signup alert={showalert}/>}/>
      <Route exact path="/aboutus" element={<About alert={showalert}/>}/>
      <Route exact path="/addproduct" element={<Addproduct alert={showalert}/>}/>
      <Route exact path="/yourproducts" element={<ProductsOfaSeller alert={showalert}/>}/>
      <Route exact path="/accountdetails" element={<Accountdetails alert={showalert}/>}/>
      <Route exact path="/yourcart" element={<YourCart alert={showalert}/>}/>
      <Route exact path="/productdetails/:id" element={<ProductDetails alert={showalert}/>}/>
      <Route exact path="/search/:query" element={<Searchedproduct alert={showalert}/>}/>
      <Route exact path="/setting" element={<Setting alert={showalert}/>}/>
      <Route exact path="/category/:category" element={<CategoryCards alert={showalert}/>}/>
     
      </Routes>
      <Footer/>


      </HashRouter>
      </Notecontext>
  );
}

export default App;
