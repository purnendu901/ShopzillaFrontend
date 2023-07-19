import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {  Input } from 'antd';
import { Link } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';



const Signin = (props) => {


//   useEffect(() => {

//     const s= document.getElementById("thecrater-otpless");
//     if(!s)
//     {
//      const script = document.createElement("script");
//      script.src = "https://otpless.com/auth.js";
//      script.id="shopaholic-otpless"
//      document.head.appendChild(script);
//     }
//      window.otpless = (otplessUser) => {
//       alert(JSON.stringify(otplessUser));
//      };

     
  
//  }, [])





  const navigate=useNavigate()

  const submit =async (e)=>
  {
    e.preventDefault()
  const response = await fetch(type==="buyer"?"https://shopbackend-izge.onrender.com/login":"https://shopbackend-izge.onrender.com/sellerlogin", {
  method: "POST", 
  mode: "cors", 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user), 
});

  const json= await response.json(); 
  console.log(json)

  if(json.error)
  {
    props.alert('danger',`${json.error}`)
  }

  if(json.seller)
  {
    
    localStorage.setItem("authtoken",json.authtoken)
    localStorage.setItem("type",json.type)
    

      navigate('/yourproducts');
      props.alert('success',`signin successfull as a ${json.type}`)
  
  }
  if(json.buyer)
  {
    
    localStorage.setItem("authtoken",json.authtoken)
    localStorage.setItem("type",json.type)
   navigate('/');
      props.alert('success',`signin successfull as a ${json.type}`)
  }



  }





  const [user, setuser] = useState({email:"",password:""})

  const onchange=(e)=>
  {
    setuser({...user,[e.target.name]:e.target.value})
     
    
  }


  
  //---------------------------------------------------------------------------------
  // changing signin for buyer and seller
  
const [border, setborder] = useState({borderbuy:"text-white bg-black",bordersell:"text-black "})
const [type, settype] = useState("buyer")
  const buyer=()=>{
    
    setborder({bordersell:"text-black",borderbuy:"text-white bg-black"})
    settype("buyer")
  }
  const seller=()=>{
    
    setborder({borderbuy:" text-black",bordersell:"text-white bg-black"})
    settype("seller")
   
    
  }








  const [showScript, setShowScript] = useState(false);

useEffect(() => {
  
  if(showScript)
  {
    const s= document.getElementById("thecrater-otpless");
  if(!s)
  {
   const script = document.createElement("script");
   script.src = "https://otpless.com/auth.js";
   script.id="thecrater-otpless"
   document.head.appendChild(script);
  }
  
  
  }
}, [showScript])
 


useEffect(() => {
  
  
  
    window.otpless = async (otplessUser) => {
    //  console.log(otplessUser.email.email );
  
     const usermail = {
      email: otplessUser.email.email 
    };
  
     const response = await fetch(type==="buyer"?"https://shopbackend-izge.onrender.com/buyerotpless":"https://shopbackend-izge.onrender.com/sellerotpless", {
    method: "POST", 
    mode: "cors", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usermail), 
  });
  
  const json= await response.json(); 
  console.log(json)

  // window.location.reload();
  if(json.error)
  {
    props.alert('danger',`${json.error}`)
  }
  
  if(json.seller)
  {
    
    localStorage.setItem("authtoken",json.authtoken)
    localStorage.setItem("type",json.type)
    
    props.alert('success',`signin successfull as a ${json.type}`)
    localStorage.setItem('signin',true) 
    
    
    window.location.hash = '#/yourproducts'
    // window.location.pathname = '/yourproducts'
  }
  if(json.buyer)
  {
    
    localStorage.setItem("authtoken",json.authtoken)
    localStorage.setItem("type",json.type)
    props.alert('success',`signin successfull as a ${json.type}`)
    localStorage.setItem('signin',true) 
    window.location.hash = '#/';
    // window.location.pathname = '/';
  }
  
  
  
    
    };


  
  

  
}, [type]);


  return (

<div id='signinpage'>

      

     <div className='d-flex align-items-center my-10 ' id='signinn'>
    <div className='container   ' >

        <div className='row justify-content-center '>


        <section  className='col-md-11 col-lg-9 col-xl-8 col-10 p-0 shadow mt-4 bg-white ' id='signincont'>
          
 
          <div className="row">

          



          <div id='imgsign' className='col-md-6 ' >
          
            
          </div>




          <div id='login' className='col-md-6 col-12 ps-0 pe-0 d-flex flex-column justify-content-center align-items-center   '>

              <div className=' d-flex col-12 align-items-center  '>
                <p onClick={buyer} className={`${border.borderbuy}  fw-semibold pointer col-6 text-center m-auto py-2  `}>Buyer</p>
                <p onClick={seller} className={` ${border.bordersell}  fw-semibold pointer col-6 text-center m-auto py-2 `}>Seller</p>
              </div>
            
            
            <div className="section col-md-9 col-lg-8 col-xl-7  col-10 mb-md-4 mt-md-2 ">
               
              <p className='fw-semibold fs-4 mb-4 mt-4 '>SIGN IN </p>
              

                


              <form className='justify-content-center'>
                <div className="mb-3 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  
                  <Input name="email" onChange={onchange} id='email' type='email' required />

                  <div id="emailHelp" className="form-text wrap">We'll never share your email.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <Input.Password name="password" onChange={onchange} placeholder="" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input border border-2" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <div className='d-grid'>
                <button type="submit" onClick={submit} className="btn btn-primary mb-4 ">Sign in</button>
                </div>
              </form>
              
              <p className='form-text text-center '>Don't have an account ? 
              <span> <Link to="/signup" className='text-decoration-none link'>Sign Up</Link> </span> 
              </p>



              <div className='d-grid'>
                <button type="submit" onClick={()=>{setShowScript(!showScript);}} className="btn btn-success mb-4 ">Login With Otpless</button>
                </div>
              

            </div>
       
        </div>

      </div>
        </section>


        


        </div>
        


    </div>
    </div>
      
   
</div>
  )
}

export default Signin
