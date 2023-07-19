import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const Context=createContext();
// export default Context

export const Notecontext=(props)=>{


  

    

      const [products, setproducts] = useState([])
      const [allproducts, setallproducts] = useState([])
      const [user,setuser] = useState({})
      const [change,setchange] = useState(true)
      const [productinfo,setproductinfo] = useState({})
      const [loading,setloading] = useState('d-none')






      //--------------------------------------------------------------
      //TO REFRESH THE NUMBER OF PRODUCT ON THE CART
      const toggle = ()=>{
        if(change===true)
        {
          setchange(false)
        }
        else
        {
          setchange(true)
        }
      }



      

  //--------------------------------------------------------------------------------
  // fetching the info of the seller 
  const fetchuser = async () => {
      const response = await axios.post("https://shopbackend-izge.onrender.com/sellergetuser", {}, {
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${localStorage.getItem("authtoken")}`,
          "Access-Control-Allow-Origin": "*"
        },
      });
  
      const details = response.data;
      setuser(details);
    
      
  };






   
    


// --------------------------------------------------------------------------------------------
//TO ADD A PRODUCT
    const addproduct = async (url,user)=>{
      const response = await fetch(url, {
        method: "POST", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${localStorage.getItem("authtoken")}`,
          "Access-Control-Allow-Origin": "*"
          
        },
        body: JSON.stringify(user), 
      });
       await response.json();
      
    }




    //------------------------------------------------------------------------------------------------------------------------
    //TO FETCH ALL THE PRODUCTS OF A SPECIFIC SELLER
    const fetchsellerproducts = async (url)=>{
      setloading('d-block')
      
      const response = await fetch(url, {
        method: "GET", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${localStorage.getItem("authtoken")}`,
          "Access-Control-Allow-Origin": "*"
          
        }
      });
      const json = await response.json();
      json.reverse()
      setproducts(json)
      setloading('d-none')
    }




    //------------------------------------------------------------------------------------------------------------------------
    //TO FETCH ALL THE PRODUCTS 
    const fetchallproducts = async (url)=>{
      setloading('d-block')
      const response = await fetch(url, {
        method: "GET", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${localStorage.getItem("authtoken")}`,
          "Access-Control-Allow-Origin": "*"
          
        }
      });
      const json = await response.json();
      
      setallproducts(json.reverse())
      setloading('d-none')
      
    }



    //------------------------------------------------------------------------------------------------------------------------
    //TO FETCH Details of a PRODUCTS 
    const productdetails = async (url)=>{
      setloading('d-block')
      const response = await fetch(url, {
        method: "GET", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
          
        }
      });
      const json = await response.json();
      setproductinfo(json)
      setloading('d-none')
    }













    return(
        <Context.Provider value={{loading,setloading,productinfo,productdetails,toggle,change,products,addproduct,fetchsellerproducts,fetchallproducts,allproducts,user,setuser,fetchuser}} >
            {props.children}
        </Context.Provider>

    )

}

// export default Notecontext;
