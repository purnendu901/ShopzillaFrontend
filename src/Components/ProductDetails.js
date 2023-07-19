import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Notecontext";
import Spinner from "./spinner";


const ProductDetails = (props) => {
  const { productinfo,loading, productdetails, toggle } = useContext(Context);
  let paramsID = useParams().id;

  const context= useContext(Context)
    const {fetchallproducts,allproducts}=context

  useEffect(() => {
    productdetails(`https://shopbackend-izge.onrender.com/productdetails/${paramsID}`);
    fetchallproducts("https://shopbackend-izge.onrender.com/api/allproducts")
    // eslint-disable-next-line
  }, []);




  const [quantity, setquantity] = useState(1)


  const clicked= async()=>{
    
     await fetch(`https://shopbackend-izge.onrender.com/addtocart/${paramsID}`, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":`${localStorage.getItem("authtoken")}`,
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify({quantity:quantity})
    });
   
    toggle()
    !localStorage.getItem('type')?props.alert('warning','Please Login to use this feature'):localStorage.getItem('type')==='buyer'?props.alert('success','Added to cart'):localStorage.getItem('type')==='seller'?props.alert('warning','Please Login as a buyer to use this'):props.alert('warning','Please Login to use this feature')
    
  }






  return (
    <div className=" my-2 my-md-5 poppins hiddenx ">
            <div className={`${loading}`}>
      <Spinner />
            </div>
      <div className={`${loading==='d-none'?'d-flex':'d-none'} row justify-content-center`}>
        
        <div className="col-xl-10 col-lg-11 col-md-12 bg-white rounded shadow-sm m-auto p-md-3">
          <div className=" p-3">

            <div  className=" detailtopsection row g-0">


              <div className="col-md-6 d-flex align-items-start  justify-content-center mb-3 mb-md-0">
                <img
                  src={productinfo.image}
                  alt="Product"
                  className="detailimg"
                />
              </div>
              <hr className="d-block d-md-none"/>










              <main className="col-md-6 d-flex  align-items-start ">
                <div className="card-body">

                

          

                  
                  <div className="detailtitle text-center text-md-start  d-flex  justify-content-between fw-bold mb-3">
                  <h4 className="title text-dark inter">
                  {productinfo.title}
                     </h4>
                    <span className="bg-primary px-2 fs-md-4 fs-6 text-center d-none d-md-flex align-items-center rounded"> <i className=" text-warning bi bi-star-fill me-1"></i><span className="text-light">4.0</span> </span>
                  </div>

                  <div className="d-flex flex-row my-3">
                  <span className="text-success ">In stock</span>
                     </div>

                  <p className="list-grou-item detailprice fw-bold">
                      <strong><i className="bi bi-currency-rupee"></i></strong> {productinfo.price}/-
                    </p>


                    <p className="inter">
                  {productinfo.description}
                   </p>
             
                  <div className="row">
            <dt className="col-6">Manufacture Date:</dt>
            <dd className="col-6">14 April 2023</dd>

            <dt className={`col-6 ${productinfo.category==='electronics'?'d-block':productinfo.category==='food'?'d-block':'d-none'}`}>{productinfo.category==='electronics'?'Warranty':productinfo.category==='food'?'Expiry Date':''}</dt>
            <dd className={`col-6 ${productinfo.category==='electronics'?'d-block':productinfo.category==='food'?'d-block':'d-none'}`}>{productinfo.category==='electronics'?'2 years':productinfo.category==='food'?'18 December 2023':''}</dd>

            <dt className="col-6">Category</dt>
            <dd className="col-6">{productinfo.category}</dd>

            <dt className="col-6">Quantities Available</dt>
            <dd className="col-6">{productinfo.quantity}</dd>
          </div>

          <hr />


{/* Only For Clothes */}
          <div className={`row mb-4 ${productinfo.category==='clothing'?'d-flex':'d-none'}`}>
            <div className="col-md-4 col-6">
              <label className="mb-2">Size</label>
              <select className="form-select border border-secondary" style={{height: '35px'}}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Quantity</label>
              <div className="input-group mb-3 " style={{width: '170px'}}>
                <button onClick={()=>{setquantity(quantity-1)}} className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                <i className="bi bi-dash"></i>
                </button>
                <input type="number" name="" value={quantity} className='text-center' style={{width: '50px'}} id="" />
              
                <button onClick={()=>{setquantity(quantity+1)}} className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
{/* Only For Clothes */}

                

                  <div className=" d-flex  align-items-center">

                  <button  className="btn btn-warning inter mr-3">Buy Now</button>
                  <button onClick={clicked} className="btn btn-primary inter mx-3"><i className="bi bi-basket2 mx-1"></i>Add to Cart</button>
                  </div>

                </div>
              </main>
            </div>

          </div>








{/* SIMILAR PRODUCTS  */}
        <div className="card ">
            <div className="card-body">
              <h5 className="card-title inter fs-3 mb-4">Similar items</h5>



              {allproducts.filter(product => product.category === productinfo.category).slice(0,3).map((product)=>{ 
                
                return( 

              <div className="d-flex mb-3 border border-2 rounded">

                <div  className="me-3 d-flex justify-content-center bg-light" style={{minWidth: '150px',maxWidth: '150px', height: '105px',overflow:'hidden'}}>
                  <img src={product.image} alt='product' style={{minWidth: '96px', height: '105px'}} className="" />
                </div>

                <div className="info d-flex flex-column justify-content-center">
                  
                    <p className="my-0">{product.title} </p>
                    <p className="my-0">{product.category}</p>
                    
                  
                  <strong className="text-dark"> &#8377;{product.price}</strong>
                </div>

              </div>

              ) })}




            </div>
            </div> 







        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
