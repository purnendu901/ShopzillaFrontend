import React, { useState } from 'react'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'


const CartProduct = (props) => {
  const context = useContext(Context)


  const remove=async()=>{

     await fetch(`https://shopbackend-izge.onrender.com/removefromcart/${props.id}`, {
      method: "DELETE", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":`${localStorage.getItem("authtoken")}`,
        "Access-Control-Allow-Origin": "*"
      }})
  
    context.toggle();
    
    props.alert('danger','Item has been removed from the Cart')

  }


  const [quantity, setquantity] = useState(props.quantity)

  return (
 
<div className="row gy-3 mb-4">
              <div className="col-lg-5">
                <div className="me-lg-5">
                  <div className="d-flex">
                    <img src={props.image} alt='' className="border rounded me-3" style={{width: '96px', height: '96px'}} />
                    <div className="">
                      <p className="my-0 nav-link">{props.title}</p>
                      <p className="text-muted">{props.category}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                <div className="">
                  <div style={{width: '90px'}} className=" me-4 d-flex border align-items-center justify-content-around">
                  <i onClick={()=>setquantity(quantity-1)} class="pointer bi bi-dash"></i>

                   {quantity}
                  <i onClick={()=>setquantity(quantity+1)} class="pointer bi bi-plus"></i>
                  </div>
                </div>
                
                <div className="">
                  <text className="h6">&#x20B9;{props.price*props.quantity}</text> <br />
                  <small className="text-muted text-nowrap"> &#x20B9;{props.price} / per item </small>
                </div>
                
              </div>
              
              
              <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                <div className="float-md-end">
                  <p onClick={remove} className="btn btn-light border text-danger icon-hover-danger"> Remove</p>
                </div>
              </div>
              
            </div>
   


  )
}

export default CartProduct
