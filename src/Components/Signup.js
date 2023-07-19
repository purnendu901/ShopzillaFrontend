import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




const Signup = (props) => {



  
  const navigate = useNavigate();
  useEffect(() => {
    
    // const form = document.querySelector('form');
    // const passwordInput = document.getElementById('password');
    // const confirmPasswordInput = document.getElementById('confirm-password');
    // const passwordError = document.getElementById('password-error');
    
    // form.addEventListener('submit', (event)=> {
    //   if (passwordInput.value !== confirmPasswordInput.value) {
    //     passwordError.innerText = 'Passwords do not match';
    //     confirmPasswordInput.classList.add('is-invalid');
    //     event.preventDefault();
    //   }
    // });
    
  }, [])




  //---------------------------------------------------------------------------------
  // changing signups for buyer and seller
  
const [border, setborder] = useState({borderbuy:"border-bottom border-dark border-3 text-danger",bordersell:""})
const [type, settype] = useState("buyer")
  const buyer=()=>{
    
    setborder({borderbuy:"border-bottom border-dark border-3 text-danger",bordersell:""})
    settype("buyer")
  }
  const seller=()=>{
    
    setborder({bordersell:"border-bottom border-dark border-3 text-danger",borderbuy:""})
    settype("seller")
   
    
  }



  

  //CONVERTING IMAGE TO BASE64
  



  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // setImage(reader.result);
      setuser({...user,image:reader.result})
      console.log(reader.result);
    }
  }

  const imgchange = (e)=>{const file = e.target.files[0];
                            console.log(file)
                            setFileToBase(file);}

  





  //For Creating a user/seller -------------
//----------------------------------------------------------------------------------------------------
  const submitt =async (e)=>
  {
      e.preventDefault()  
      
        const response = await fetch(type==="buyer"?"https://shopbackend-izge.onrender.com/signup":"https://shopbackend-izge.onrender.com/sellersignup", {
          method: "POST", 
          mode: "cors", 
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify(user), 
        });
        
          const json= await response.json(); 
          console.log(json)
        
        
          if(json.signup)
          {
            
            console.log("signup successfull as a ",type)
           navigate('/signin');
           props.alert('success',`signup successfull as a ${type}`)
          
          }
      
  }








  const [user, setuser] = useState({firstname:"",lastname:"",age:"",email:"",password:""})

  const onchange=(e)=>
  {
    setuser({...user,[e.target.name]:e.target.value})
    
  }


    





  return (
  
    <div className="container justify-content-center d-flex  " id='signupcont'>
    <div className="card border border-1 col-lg-6 shadow ">
    
      
        <h4 className="card-title text-center bg-black fw-semibold fs-2 mb-2 py-1 text-white">SIGN UP</h4>
      
{/* ---------------------------------------------------------------------------------------------------------------- */}

{/* Making two tabs for usersignup and buyer signup */}

<div className="justify-content-center  d-flex pt-0 pb-0 ">
  <p className={` fs-5 fw-semibold pointer ${border.borderbuy} me-2 ms-2 active`} onClick={buyer} >BUYER</p>
  <p className={` fs-5 fw-semibold pointer ${border.bordersell} me-2 ms-2 active`} onClick={seller} >SELLER</p>
</div>


      

{/* ------------------------------------------------------------------------------------------------------------------------- */}

      <div className="card-body py-2">
        <div >   
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="first-name" className="">First Name</label>
              <input type="text" name="firstname" onChange={onchange} className="form-control" id="firstname" placeholder="Enter First Name"/>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="last-name" className="">Last Name</label>
              <input type="text" name="lastname" onChange={onchange} className="form-control" id="lastname" placeholder="Enter Last Name"/>
            </div>
          </div>

          
          <div className="row">
            
          <div className="form-group col-12 col-md-6">
         <label htmlFor="gender">gender</label>
        <select className="form-control" id="gender" name='gender' onChange={onchange} >
          <option value="">--Select a category--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
            <option value="Others">Others</option>
          
           </select>
           </div>
            






            <div className="col-md-6 mb-3">
              <label htmlFor="age" className="">Age</label>
              <input type="number" className="form-control"  name="age" onChange={onchange} id="age" placeholder="Enter Age"/>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email"  className="">Email address</label>
            <input type="email" className="form-control" onChange={onchange} name="email" id="email" placeholder="Enter Email Address"/>
</div>
<div className="mb-3">
<label htmlFor="password"  className="">Password</label>
<input  className="form-control" id="password" placeholder="Enter Password"/>
</div>
<div className="mb-3">
<label htmlFor="confirm-password"  className="">Confirm Password</label>
<input name="password" className="form-control" onChange={onchange} id="confirm-password" placeholder="Re-enter Password"/>
<small id="password-error" className="form-text"></small>
</div>

<div className={`${type==="buyer"?"d-none":"d-block"} mb-3`}>
              <label  className="">Your Address</label>
              <input type="text" name="address" required onChange={onchange} className="form-control" id="address" placeholder="Your Address"/>
            </div>

<div className={`${type==="buyer"?"d-none":"d-block"} mb-3`}>
     <label  className="">Upload Your Image : </label>
     <input
      onChange={imgchange} 
      className="form-control" type="file" id="formFile"/>
      </div>

<button  onClick={submitt} type="submit" className="btn btn-primary btn-block col-12 col-md-2    ">Sign Up</button>
</div>
</div>




{/* -------------------------------------------------------------------------------------------------------------------------------- */}

<div className="card-footer text-muted form-text" id='haveac'>
Already have an account? <Link to="/signin" className='text-decoration-none '>Sign In</Link>
</div>
</div>

  </div>

  )
}

export default Signup
