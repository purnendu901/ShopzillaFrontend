import React, { useState, useEffect } from 'react';

import userimg from "../images/user.png"
import searchicon from "../images/search.png"
import { Link, useLocation } from 'react-router-dom';
import cart from '../images/cart.png'
import axios from 'axios';
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'





const NavbarBuyer = (props) => {
  
  const context= useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()



  const [cartquantity, setcartquantity] = useState()



  useEffect(() => {
        //FOR FETCHING FOR FIRST TIME
        const fetchuser = async () => {
          try {
            const response = await axios.post("https://shopbackend-izge.onrender.com/getuser", {}, {
              headers: {
                "Content-Type": "application/json",
                "auth-token":`${localStorage.getItem("authtoken")}`,
                "Access-Control-Allow-Origin": "*"
              },
            });
        
            const details = response.data;
          
            setcartquantity(details.cartItems.length)
          } catch (error) {
            console.log(error);
          }
        };
        fetchuser();
  }, [])
  


  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.post("https://shopbackend-izge.onrender.com/getuser", {}, {
          headers: {
            "Content-Type": "application/json",
            "auth-token":`${localStorage.getItem("authtoken")}`,
            "Access-Control-Allow-Origin": "*"
          },
        });
    
        const details = response.data;
        
        setcartquantity(details.cartItems.length)
      } catch (error) {
        console.log(error);
      }
    };
    fetchuser();
  }, [context.change])
  









  //Displaying

  const [display, setdisplay] = useState('d-flex')

  useEffect(() => {
    
     if(location.pathname==='/signin' || location.pathname==='/signup')
    {
      setdisplay('d-none')
      
    }
    else if(location.pathname==='/addproduct' || location.pathname==='/yourproducts')
    {
      setdisplay('d-none')
      
    }
    else if(location.pathname==='/orders' || location.pathname==='/accountdetails')
    {
      setdisplay('d-none')
      
    }
    else if(location.pathname==='/setting' )
    {
      setdisplay('d-none')
      
    }
    else{
      setdisplay('d-flex')

    }
    
  }, [location.pathname])
  



  const tocart=()=>{
      navigate('/yourcart')
  }

  


  const clicklogout=()=>{
    localStorage.setItem("authtoken",null)
    localStorage.setItem("type",null)
    navigate('/signin')
    props.alert('success',`Logged out of the account successfully`)
  }

  const clicklogin=()=>{
    navigate('/signin')
  }


  //for search
 
  const [searchTag, setSearchTag] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    navigate(`/search/${searchTag}`)
  }



  return (
    <div className={`${display}`}>


<nav id='navbar' className={`navbar container-fluid position-static`} style={{ backgroundColor: '#192B6C' }}>
   
  <div className="container-fluid d-flex ">


    {/* BRANDNAME  */}
    <div className='d-flex col-md-2  col-lg-3'>
      <a className="text-decoration-none text-white text-white brandname" href="/"><div id='brandname' className=' fw-bold fs-4 text-center p-0 '>
      <span className='s fs-2 '>S</span><span className='hopaholic'>HOPZILLA</span>
      </div></a>   
    </div>


{/* SEARCHBAR BIG */}
    <div className='col-lg-5 d-none my-2 d-md-flex justify-content-center col-md-6 '>
      <div className="input-group ">
    <input type="text" className="form-control" onChange={(event) => setSearchTag(event.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-icon"/>
    <span className=" bg-light searchbaricon" id="search-icon">
      <img src={searchicon} alt="" onClick={handleSearch} className='searchicon pointer' />
    </span>
</div>
    </div>


    {/* //CART AND USER  */}
    <div className='fullround d-none d-md-flex col-lg-3 col-md-2 flex-row-reverse'>
      <div id='userdropdown' className='position-relative '>
      <img src={userimg} id='userimg' alt="" className='fullround smallimg mx-2  ' />
      <div id='userdropdownmenu' onClick={localStorage.getItem('type')==='buyer'?clicklogout:clicklogin} className='pointer bg-white shadow p-2 rounded fw-bold position-absolute '>{localStorage.getItem('type')==='buyer'?"Logout":"Login"}</div>
      </div>
      <div  className={`position-relative mx-3 ${localStorage.getItem('type')==='buyer'?"d-block":"d-none"} `}>
        <img src={cart} alt="" onClick={tocart} id='carticon' className='pointer' />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartquantity}</span>
      </div>

    </div>









    
    
    <button className="navbar-toggler d-flex d-md-none border-white " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <i class="bi bi-list text-white"></i>
    </button>


    <div className="offcanvas offcanvas-end d-flex d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

    <nav id='nav' className={`  col-12 d-flex height90  `}>
      


      <div className='row m-0 col-12 '>
      
      
      
      <div id='navbarop' className='col-xl-8 col-lg-9 col-12 p-0  justify-content-between   d-flex flex-column   '>
      
      
      <div className=''>
      
      
      <div id='brandname' className=' fw-bold fs-3 text-center p-0 my-3 ps-3 pe-3 d-flex justify-content-between align-items-center'>
        <div><span className='s fs-1 '>S</span><span className='hopaholic'>HOPZILLA</span></div>
        <div className='fs-6'>  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
      
      </div>
      <hr className='m-0 p-0'/>
      
       <section className=" col-xl-11 col-11 rubik ps-3 pe-3 mx-auto mt-4 d-flex flex-column">
        <div data-bs-dismiss="offcanvas" id='accinfo' className='d-flex  text-secondary align-items-center my-2 ps-3 '>          
        <i class="bi bi-house-fill"></i>
        <Link to  ="/"  className='ms-2 text-decoration-none text-start  nav-link pointer rounded py-1 fw-medium '  >Home</Link>
        </div>
      
      
        <div id='yourproducts' data-bs-dismiss="offcanvas" className=' d-flex text-secondary align-items-center my-2  ps-3 '> 
        <i class="bi bi-bag-fill "></i> 
        <Link to  ="/yourcart"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Your Cart</Link>
        </div>
      
        <div id='addproducts' data-bs-dismiss="offcanvas" className='d-flex text-secondary  my-2 align-items-center ps-3 '>  
        <i class="bi bi-file-person-fill"></i>
        <Link to  ="/"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >About Us</Link>
        </div>
       
      
        <div id='orders' data-bs-dismiss="offcanvas" className='d-flex  text-secondary  my-2  align-items-center ps-3 '>  
        <i class="bi bi-question-square-fill"></i>
        <Link to  ='/'  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Support</Link>
        </div>
       </section>
      </div>
      
      <section className=' ps-3 pe-3  col-xl-11 col-11  mx-auto rubik d-flex flex-column'>
      
      
      <div id='setting' data-bs-dismiss="offcanvas" className='d-flex  text-secondary align-items-center mb-2 ps-3 '>  
      <i class="bi bi-person-plus-fill"></i>
        <Link to='/signup' className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded fw-medium '   >SignUp as a Seller</Link>
        </div>
      
        
        <div data-bs-dismiss="offcanvas" className='d-flex  text-secondary align-items-center mb-4 ps-3'>  
        
        {localStorage.getItem('type')==='buyer'?<i class="bi bi-box-arrow-left"></i>:<i class="bi bi-box-arrow-in-right"></i>} 
        <p className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded  fw-medium ' onClick={localStorage.getItem('type')==='buyer'?clicklogout:clicklogin}  >{localStorage.getItem('type')==='buyer'?'Logout':'Login'} </p>
        </div>
      </section>
      </div>
      
      
      
      
      </div>
      
      
      </nav>
    </div>

  </div>
</nav>


</div>
  )
}

export default NavbarBuyer
