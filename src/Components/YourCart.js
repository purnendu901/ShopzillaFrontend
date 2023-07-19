import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../Context/Notecontext'
import CartProduct from './CartProduct'
import Spinner from './spinner'


const YourCart = (props) => {
    const context = useContext(Context)
    const {loading,setloading}= context
    const [products, setproducts] = useState([])
    
    
    const [total, setTotal] = useState(0);

useEffect(() => {
    let totalPrice = 0;
    products.forEach((p) => {
        totalPrice += p.quantity * p.product.price;
    });
    setTotal(totalPrice);
}, [products]);


    useEffect(() => {
      

        if(localStorage.getItem('type')==='buyer')
        {const cartproducts=async()=>{
          setloading('d-block')
        const response = await fetch(`https://shopbackend-izge.onrender.com/cartproducts`, {
            method: "GET", 
            mode: "cors", 
            headers: {
              "Content-Type": "application/json",
              "auth-token":`${localStorage.getItem("authtoken")}`,
              "Access-Control-Allow-Origin": "*"
              
            }
          });
          const json = await response.json();
          console.log(json.products)
          setproducts(json.products)
          setloading('d-none')
          
          
          
        }
          cartproducts()}
        
          // eslint-disable-next-line
    }, [context.change])
    
    const navigate= useNavigate()
    const click=()=>{navigate('/signin')}


  return (
    <div className=''>

      <div className={`${loading}`}>
        <Spinner/>
      </div>

      
<section className={` my-md-5  ${loading==='d-none'?'d-block':'d-none'}`}>
  <div className="container">
    <div className="row">
      
      <div className="col-lg-9">
        <div className="card border border-3">
          <div className="m-4">
            <h4 className="card-title mb-4">Your shopping cart</h4>
            
            
            
            
            <div>
            
            {localStorage.getItem('type')!=='buyer'?<div className='fs-md-5  inter text-primary text-center my-1'><strong className='pointer' onClick={click}><i class="bi bi-box-arrow-in-right me-2"></i>Login </strong>to add items in your Cart</div>  :products.length>=1?products.map((p)=> { return ( 
            <div>
            <CartProduct alert={props.alert} setproducts={setproducts} category={p.product.category} key={p.product._id} id={p.product._id} title={p.product.title} image={p.product.image} description={p.product.description} quantity={p.quantity} price={p.product.price} /> 
                </div>
                )}):<div className='fs-4 inter text-danger text-center my-1'><i class="bi bi-cart mx-2"></i>Your Cart is Empty</div>
                }
            
         </div>
            
            
            
            
          </div>
          
          

          <div className="border-top pt-4 mx-4 mb-4">
            <p><i className="bi bi-truck"></i> Free Delivery within 1-2 weeks</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip
            </p>
          </div>
          
        </div>
      </div>
      {/* <!-- cart --> */}
      {/* <!-- summary --> */}
      <div className="col-lg-3 ">
        <div className="card mb-3 border border-3 shadow-0">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Have coupon?</label>
                <div className="input-group">
                  <input type="text" className="form-control border" name="" placeholder="Coupon code" />
                  <button className="btn btn-light border">Apply</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card shadow-0 border-3 border">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              <p className="mb-2">&#x20B9;{total}</p>
            </div>
            
            <div className="d-flex justify-content-between">
              <p className="mb-2">TAX:</p>
              <p className="mb-2">&#x20B9;{Math.floor(total*0.008)}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              <p className="mb-2 fw-bold">&#x20B9;{total+Math.floor(total*0.008)}</p>
            </div>

            <div className="mt-3">
              <div className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </div>
              <Link to="/" className="btn btn-light w-100 border mt-2"> Back to shop </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


    </div>
  )
}

export default YourCart
