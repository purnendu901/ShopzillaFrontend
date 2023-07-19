import React, { useState } from 'react'
import '../ExtraCSS/productcard.css'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProductBuyerCard = (props) => {

  const context= useContext(Context)

  const [quantity, setquantity] = useState(1)

  const plus =()=>{setquantity(quantity+1)}
  const minus =()=>{setquantity(quantity-1)}


  const clicked= async()=>{
    if (isNaN(quantity) || quantity <= 0) {
      return alert("Invalid quantity");
    }
    console.log(quantity)
     await fetch(`https://shopbackend-izge.onrender.com/addtocart/${props.id}`, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":`${localStorage.getItem("authtoken")}`,
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify({quantity:quantity})
    });
   
    context.toggle()
    !localStorage.getItem('type')?props.alert('warning','Please Login to use this feature'):localStorage.getItem('type')==='buyer'?props.alert('success','Added to cart'):localStorage.getItem('type')==='seller'?props.alert('warning','Please Login as a buyer to use this'):props.alert('warning','Please Login to use this feature')
    
  }







  return (
    <div className="product-card mx-md-3 ms-1 mx-2 my-3 d-flex flex-column rubik" >

       <div className='cardmain rubik'>
        

    <div className='bg-light prodimgcontainer d-flex justify-content-center align-items-center'>
  <Link to={`/productdetails/${props.id}`}><img src={props.image} className='prodimg' alt="Product"/></Link>
    </div>
  
  <div className="product-details  ">
    
    {/* PART */}
    <h2 className='mb-1 mt-2 inter fw-bold '>{props.title.length>21?props.title.slice(0,21):props.title}</h2>
    

    {/* PART */}
    <div id='middle' className='d-flex justify-content-between  align-items-center'>
    <div className="price"><span><i className="bi bi-currency-rupee fe-bold"></i></span>{props.price} </div>

    <div className='quantity '><i onClick={minus} className="pointer bi bi-dash-square"></i><span>{quantity}</span><i onClick={plus} className="pointer bi bi-plus-square"></i></div>
    </div>


    
    {/* PART */}
    <div className='d-flex justify-content-between'>
    <p onClick={clicked} className='btn btn-primary shadowlg fw-bold buynow text-white'>Buy Now</p>
    <p onClick={clicked} className='btn btn-primary shadowlg fw-bold addtocart text-white fullround'><i className="bi bi-cart-plus-fill"></i></p>
    </div>


  </div>





  </div> 
</div>
  )
}

export default ProductBuyerCard
