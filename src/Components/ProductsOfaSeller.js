import React, { useEffect } from 'react'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import Productsellercard from './Productsellercard'


const ProductsOfaSeller = (props) => {

    const context = useContext(Context)
    const {fetchsellerproducts,products}= context



    useEffect(() => {
      if(localStorage.getItem('signin')==="true")
      {
        window.location.reload();
        localStorage.setItem('signin',"false");
      }
      fetchsellerproducts("https://shopbackend-izge.onrender.com/fetchallproduct")
      // eslint-disable-next-line
    }, [products])
    



  return (

    
   
    <div  className='container-fluid fullheight mt-0 ' >
    <div  className='row fullheight' >
    <div  className=' col-md-3 col-lg-2  '></div>


    <div  className="col-md-9 col-12 mx-auto d-flex  fulheight justify-content-center  align-items-center  mt-md-0 mt-4 ">



         <div  className='col-md-11 col-12   m-auto rounded shadow rubik bg-white height90 '  >
    <h3 className='bg-dark text-white py-2 text-center rounded-top poppins fs-'>Your Products</h3>
    
      {/* <div className={`${loading}`}>
    <Spinner/>
      </div> */}
    <div className='d-flex bg-white  flex-wrap height80 scroll justify-content-around' >
    {products.map((product)=>{ 
      return  <Productsellercard alert={props.alert} key={product._id} id={product._id} tags={product.tags} description={product.description} image={product.image} title={product.title} price={product.price} quantity={product.quantity} category={product.category} />
    })}
    </div>
    
    <div className='col-11 mx-auto  my-3 ' >
        

    </div>




    


 
    </div>
    





      
        </div>
    </div>
    </div>
    
  )
}

export default ProductsOfaSeller
