import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../Context/Notecontext'
import { useContext , useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'



const Navbar = (props) => {

  
  const {fetchuser} = useContext(Context)

  const location=useLocation()
  const navigate=useNavigate()

  useEffect(() => {
   
      fetchuser();
      
      
    // eslint-disable-next-line
  }, [localStorage.getItem("authtoken")])


  const [display, setdisplay] = useState('d-none')


  useEffect(() => {
  location.pathname==='/yourproducts'?document.getElementById('yourproducts').className='d-flex   align-items-center my-2 text-primary bg-lightgray  ps-3 ':document.getElementById('yourproducts').className='d-flex  text-secondary align-items-center my-2 ps-3 '
  location.pathname==='/addproduct'?document.getElementById('addproducts').className='d-flex  align-items-center my-2 text-primary bg-lightgray  ps-3 ':document.getElementById('addproducts').className='d-flex  text-secondary align-items-center my-2 ps-3 '
  location.pathname==='/accountdetails'?document.getElementById('accinfo').className='d-flex   align-items-center my-2 text-primary bg-lightgray  ps-3 ':document.getElementById('accinfo').className='d-flex  text-secondary align-items-center my-2 ps-3 '
  location.pathname==='/orders'?document.getElementById('orders').className='d-flex   align-items-center my-2 text-primary bg-lightgray  ps-3 ':document.getElementById('orders').className='d-flex text-secondary  align-items-center my-2 ps-3 '
  location.pathname==='/setting'?document.getElementById('setting').className='d-flex  align-items-center mb-2 text-primary bg-lightgray  ps-3 ':document.getElementById('setting').className='d-flex  text-secondary align-items-center mb-2  ps-3 '
  

  if(localStorage.getItem('type')==='buyer')
  {
    setdisplay('d-none')
    
    
  }
  else if(location.pathname==='/yourproducts'){setdisplay('d-flex')}
  else if(location.pathname==='/addproduct'){setdisplay('d-flex')}
  else if(location.pathname==='/accountdetails'){setdisplay('d-flex')}
  else if(location.pathname==='/orders'){setdisplay('d-flex')}
  else if(location.pathname==='/setting'){setdisplay('d-flex')}
  else{setdisplay('d-none')}
  
  
    
 
  }, [location.pathname])
  
  
  
 


  const click=()=>{
    

    localStorage.setItem("authtoken",null)
    localStorage.setItem("type",null)
    
    navigate('/signin')
    props.alert('success',`Logged out of the account successfully`)
  }


  


  return (

    <div id='sellerbar' className={`${display}`} >

    <nav id='navbar' className={` d-none  col-3 d-md-flex fullheight position-absolute `}>

      <div className='row m-0 col-12 '>



      <div id='navbaropt' className='col-xl-8 col-lg-9 col-12 p-0  justify-content-between   d-flex flex-column   '>


    <div className=''>


      <div id='brandname' className=' fw-bold fs-3 text-center p-0 my-2'>
      <span className='s fs-1 '>S</span><span className='hopaholic'>HOPZILLA</span>
      </div>
      <hr className='m-0 p-0'/>
    
       <section className=" col-xl-11 col-11 rubik ps-3 pe-3 mx-auto mt-4 d-flex flex-column">
        <div id='accinfo' className='d-flex  text-secondary align-items-center my-2 ps-3 '>          
        <i class="bi bi-person-circle"></i>
        <Link to  ="/accountdetails"  className='ms-2 text-decoration-none text-start  nav-link pointer rounded py-1 fw-medium '  >Profile</Link>
        </div>


        <div id='yourproducts' className='d-flex text-secondary align-items-center my-2  ps-3 '> 
        <i class="bi bi-bag-fill "></i> 
        <Link to  ="/yourproducts"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Your products</Link>
        </div>

        <div id='addproducts' className='d-flex text-secondary  my-2 align-items-center ps-3 '>  
        <i class="bi bi-bag-plus-fill"></i>
        <Link to  ="/addproduct"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Add a product</Link>
        </div>
       

        <div id='orders' className='d-flex  text-secondary  my-2  align-items-center ps-3 '>  
        <i class="bi bi-list-ul"></i>
        <Link to  ='/orders'  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Orders</Link>
        </div>
       </section>
</div>

<section className=' ps-3 pe-3  col-xl-11 col-11  mx-auto rubik d-flex flex-column'>


<div id='setting' className='d-flex  text-secondary align-items-center mb-2 ps-3 '>  
        <i class="bi bi-gear-fill"></i>
        <Link to='/setting' className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded fw-medium '   >Settings</Link>
        </div>

        
        <div className='d-flex  text-secondary align-items-center mb-4 ps-3'>  
        <i class="bi bi-box-arrow-left"></i>
        <p className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded  fw-medium ' onClick={click}  >Logout</p>
        </div>
</section>
      </div>


    

      </div>
    

    </nav>

  

  
<nav id='navbarr' className={`navbar container-fluid d-flex d-md-none bg-body-tertiary shadow`}>
  <div className="container-fluid">
 


    <a className="navbar-brand" href="/"><div id='brandname' className=' fw-bold fs-3 text-center p-0 '>
      <span className='s fs-1 '>S</span><span className='hopaholic'>HOPZILLA</span>
      </div></a>

    
    
    <button className="navbar-toggler d-flex d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end d-flex d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      
      

        <nav id='nav' className={`  col-12 d-flex height90  `}>
      


<div className='row m-0 col-12 '>



<div id='navbarop' className='col-xl-8 col-lg-9 col-12 p-0  justify-content-between   d-flex flex-column   '>


<div className=''>


<div id='brandname' data-bs-toggle="offcanvas"  className=' fw-bold fs-3 text-center p-0 my-3 ps-3 pe-3 d-flex justify-content-between align-items-center'>
  <div><span className='s fs-1 '>S</span><span className='hopaholic'>HOPZILLA</span></div>
  <div className='fs-6'>  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>

</div>
<hr className='m-0 p-0'/>

 <section className=" col-xl-11 col-11 rubik ps-3 pe-3 mx-auto mt-4 d-flex flex-column">
  <div data-bs-toggle="offcanvas"  id='accinfo' className='d-flex  text-secondary align-items-center my-2 ps-3 '>          
  <i class="bi bi-person-circle"></i>
  <Link to  ="/accountdetails"  className='ms-2 text-decoration-none text-start  nav-link pointer rounded py-1 fw-medium '  >Profile</Link>
  </div>


  <div data-bs-toggle="offcanvas"  id='yourproducts' className='d-flex text-secondary align-items-center my-2  ps-3 '> 
  <i class="bi bi-bag-fill "></i> 
  <Link to  ="/yourproducts"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Your products</Link>
  </div>

  <div data-bs-toggle="offcanvas"  id='addproducts' className='d-flex text-secondary  my-2 align-items-center ps-3 '>  
  <i class="bi bi-bag-plus-fill"></i>
  <Link to  ="/addproduct"  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Add a product</Link>
  </div>
 

  <div data-bs-toggle="offcanvas"  id='orders' className='d-flex  text-secondary  my-2  align-items-center ps-3 '>  
  <i class="bi bi-list-ul"></i>
  <Link to  ='/orders'  className='ms-2 text-decoration-none text-start nav-link pointer rounded py-1 fw-medium '  >Orders</Link>
  </div>
 </section>
 
</div>

<section className=' ps-3 pe-3  col-xl-11 col-11  mx-auto rubik d-flex flex-column'>


<div data-bs-toggle="offcanvas"  id='setting' className='d-flex  text-secondary align-items-center mb-2 ps-3 '>  
  <i class="bi bi-gear-fill"></i>
  <Link to='/setting' className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded fw-medium '   >Settings</Link>
  </div>

  
  <div data-bs-toggle="offcanvas"  className='d-flex  text-secondary align-items-center mb-4 ps-3'>  
  <i class="bi bi-box-arrow-left"></i>
  <p className='ms-2 text-decoration-none text-start my-2 nav-link pointer rounded  fw-medium ' onClick={click}  >Logout</p>
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

export default Navbar
