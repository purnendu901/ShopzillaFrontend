import React, { useEffect, useState } from 'react'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import ProductBuyerCard from './ProductBuyerCard'
import { Link, useNavigate } from 'react-router-dom'
import storeimg from '../images/store.png'
import searchicon from "../images/search.png"
import Spinner from './spinner'




const Home = (props) => {
    const context= useContext(Context)
    const {fetchallproducts,allproducts,loading}=context
    useEffect(() => {

      if(localStorage.getItem('type')==="seller")
      {
        window.location.hash="#/yourproducts";
      }
        
      if(localStorage.getItem('signin')==="true")
      {
        window.location.reload();
        localStorage.setItem('signin',"false");
      }

        fetchallproducts("https://shopbackend-izge.onrender.com/api/allproducts")
        console.log(allproducts)
        // eslint-disable-next-line
    }, [])




     //for search
    const navigate = useNavigate()

  const [searchTag, setSearchTag] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    navigate(`/search/${searchTag}`)
  }


    
    return (
    <div id='homepage' className='  '>

      <div className={`${loading}`}>
      <Spinner/>

      </div>
    <div  className={`${loading==='d-none'?'d-block':'d-none'}  flex-wrap `}>

            

            {/* HERO SECTION */}
            <div  className=" bg-primary text-white " style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/05/06/47/83/360_F_506478399_l0jgZ5ZWj80o8XYdEJtYfQhVYMU56qDJ.jpg')",backgroundSize: 'cover', backgroundPosition: 'center center'}}>

    <div className="col-11  m-auto py-5 py-md-0 d-flex row">
    <div className="col-md-7  py-0 py-md-4 py-lg-4 py-xl-1  d-flex flex-column justify-content-center">

      <h1 className="fw-bold rubik mb-4 ">
        Best products & <br />
        brands in our store
      </h1>

      <p className="mb-4 inter">
        Discover the latest and most trendy products at affordable prices, all backed by our excellent service.
      </p>
      <div>

      <a href="/" className="rubik btn btn-lg btn-outline-light me-3 mb-3">
        Learn more
      </a>
      <a href="/" className="rubik btn btn-lg btn-light shadow-0 text-primary pt-2 border border-white mb-3">
        <span className="pt-1">Purchase now</span>
      </a>
      </div>
    </div>


        <div className='col-md-5 d-none d-md-block'>
            <img src={storeimg} className='img-fluid' alt="" />

        </div>



    </div>



</div>

      
            {/* HERO SECTION */}







      {/* SEARCHBAR BIG */}
    <div className='col-11 m-auto d-flex my-2 d-md-none justify-content-center  '>
      <div className="input-group p-0 ">
    <input type="text" className="form-control" onChange={(event) => setSearchTag(event.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-icon"/>
    <span className=" bg-light searchbaricon" id="search-icon">
      <img src={searchicon} alt="" onClick={handleSearch} className='searchicon pointer' />
    </span>
</div>
    </div>
      {/* SEARCHBAR BIG */}






{/* SHOP BY CATEGORIES */}
            <section className="mt-5 mb-4 container-fluid">
            <div className="col-11 m-auto text-dark">
            <header className="">
      <h3 className="section-title inter">Shop By Categories</h3>
    </header>

    <div className="row gy-3 my-2">


      <div className="col-lg-2 col-md-4 col-4 d-flex flex-column ">

      <Link to="/category/electronics" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://m.media-amazon.com/images/I/61yGeehNcyL._AC_SL1001_.jpg" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>ELECTRONICS</small>
        
      </div>
    
      <div className="col-lg-2 col-md-4 d-flex flex-column col-4">
        <Link to="/category/home-appliance" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://cdn.staticans.com/image/tr:h-1500,w-1500,cm-pad_resize/data/philips/14-08-2021/HL7763%20Product_777%20x%20826%20pxls.jpg" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>HOME</small>
      </div>
     
      <div className="col-lg-2 col-md-4 d-flex flex-column col-4">
        <Link to="/category/education" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://img.freepik.com/free-vector/back-school-season-design_24877-50472.jpg" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>EDUCATION</small>
      </div>
      
      <div className="col-lg-2 col-md-4 d-flex flex-column col-4">
        <Link to="/category/clothing" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://m.media-amazon.com/images/I/512ge6qeIvL._UX522_.jpg" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>CLOTHING</small>
      </div>
     
      <div className="col-lg-2 col-md-4 d-flex flex-column col-4">
        <Link to="/category/sports" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://img.freepik.com/free-vector/sports-equipment-icons-set_1284-13032.jpg?w=2000" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>SPORTS</small>
      </div>


      <div className="col-lg-2 col-md-4 d-flex flex-column col-4">
        <Link to="/category/food" className="img-wrap">
          <img height="200" width="200" alt='' className="img-thumbnail" src="https://m.media-amazon.com/images/I/81NQ3izq5+L._SL1500_.jpg" />
        </Link>
        <small className=' m-0 position-relative text-center text-muted'>FOOD</small>
      </div>
     

    </div>
  </div>
</section>
{/* SHOP BY CATEGORIES */}
        





        


        <div className=' container-fluid my-4 '>
        <h2 className='inter fw-medium fs-2 text-start  col-11 mx-auto '>New Products</h2>
        <div id='scrollhere' className=' mx-auto col-11  justify-content-between '>
        {    
            allproducts.slice(0,6).map((product)=>{ return( <ProductBuyerCard alert={props.alert} id={product._id} key={product._id} image={product.image} title={product.title} category={product.category} price={product.price} quantity={product.quantity}  />) })
        }
        </div>
        </div>





        {/* MIDDLE BANNER */}
        <section className="col-12 m-auto  my-5">

    <div className="col-11 m-auto p-0">
      <div className=" row gy-4 p-0 d-flex  ">
      <div className=" row  m-auto  ">





        <div className="col-lg-6 p-0">
          <div className="card-banner bg-gray h-100" style={{
                                                        minHeight: '200px',
                                                        // maxHeight: '400px',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        width: '100%',
                                                        backgroundRepeat: 'no-repeat',
                                                        top: '50%',
                                                      backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1610508684198-VS6Y0NTGKXEK8V96NZLW/image-asset.jpeg')"}}>
            <div className="p-3 p-lg-5 text-white" style={{maxWidth: '80%'}}>
              <h3 className="text-white inter">Best Gaming Laptops at our store at 20% off</h3>
              <p>That's true but not always</p>
              <Link to={`/search/gaminglaptop`} className="btn btn-warning fw-bold inter shadow-0" href="#"> Checkout </Link>
            </div>
          </div>
        </div>







        <div className="col-lg-6 bg-black d-lg-block d-none">


          <div className="row mb-3 mb-sm-4 g-3 g-sm-4">

            <div className="col-6 d-flex">
              <div className="card w-100 bg-primary" style={{minHeight: '180px',maxHeight: '180px'}}>

                <div className="card-body">
                  <h5 className="text-white">Gaming Headphones</h5>
                  <p className="text-white-50">For advance gaming experience</p>
                  <Link to='/productdetails/64362c8b05014939f2eeaf39' className="btn btn-outline-light btn-sm" >checkout</Link>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="card w-100 bg-primary" style={{minHeight: '180px',maxHeight: '180px'}}>
                <div className="card-body">
                  <h5 className="text-white">Boat Airpodes</h5>
                  <p className="text-white-50">All you need for music</p>
                  <Link to='/productdetails/642845f51fa326b6abf53931' className="btn btn-outline-light btn-sm" >Checkout</Link>
                </div>
              </div>
            </div>


          </div>
        
  
          <div className="card bg-success" style={{minHeight: '180px',maxHeight: '180px'}}>
            <div className="card-body">
              <h5 className="text-white">Buy 2 items, With special gift</h5>
              <p className="text-white-50" style={{maxWidth: '400px'}}>Buy one, get one free marketing strategy helps your business improves the brand by sharing the profits</p>
              <a className="btn btn-outline-light btn-sm" href="/">Learn more</a>
            </div>
          </div>
        </div>



    
      </div>

    </div>
    </div>
   
  </section>
        {/* MIDDLE BANNER */}




        

          {/* SPORTS PRODUCTS  */}
        <div className=' container-fluid my-4 '>
        <h2 className='inter fw-medium fs-2 text-start  col-11 mx-auto '>Top Products on Sports</h2>
        <div id='scrollhere' className=' mx-auto col-11  justify-content-between '>
        {    
           allproducts.filter((product) => product.category === 'sports').slice(0,6).reverse().map((product)=>{ return( <ProductBuyerCard alert={props.alert} id={product._id} key={product._id} image={product.image} title={product.title} category={product.category} price={product.price} quantity={product.quantity}  />) })
        }
        </div>
        </div>


    </div>
    </div>
  )
}

export default Home
