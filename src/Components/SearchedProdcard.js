import React from 'react'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const SearchedProdcard = (props) => {

  const context = useContext(Context)
  const quantity=1

  const clicked= async()=>{
    
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
    <div className="row justify-content-center mb-3">


       



          <div className="col-md-12">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                    <Link to={`/productdetails/${props.id}`} className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                      <img src={props.image} alt='reload' className="w-100" />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div className="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-6 col-md-5 col-sm-7">
                    <h5>{props.title}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-warning mb-1 me-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                        <span className="ms-1">
                          4.5
                        </span>
                      </div>
                      <span className="text-muted">154 orders</span>
                    </div>

                    <p className="text mb-4 mb-md-0">
                      {props.description.slice(0,180)+'.....'}
                    </p>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-5">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">&#x20B9;{props.price}</h4>
                      <span className="text-danger"><s>&#x20B9;{Math.floor(props.price *(Math.random() + 1))}</s></span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="mt-4">
                      <button onClick={clicked} className="btn btn-primary shadow-0" type="button">Add to Cart</button>
                      <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="bi bi-suit-heart-fill"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SearchedProdcard
