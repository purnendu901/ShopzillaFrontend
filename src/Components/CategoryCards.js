import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/Notecontext'
import { useContext } from 'react'
import ProductBuyerCard from './ProductBuyerCard'
import Spinner from './spinner'


const CategoryCards = (props) => {

    const [category, setcategory] = useState(useParams().category)
    
    if(category==='home-appliance')
    {
        setcategory('home')
    }
    

    
    const context= useContext(Context)
    const {fetchallproducts,allproducts,loading}=context
    useEffect(() => {
        
        fetchallproducts("https://shopbackend-izge.onrender.com/api/allproducts")
        console.log(allproducts)
        // eslint-disable-next-line
    }, [])



  return (
    <div className='  m-auto d-flex flex-column'>


        <div className={`${loading}`}>
            <Spinner/>
        </div>

        <div className={`${loading==='d-none'?'d-block':'d-none'}`}>
        <h2 className='inter fw-medium fs-2 text-center fw-bold col-11 mx-auto my-md-4 my-3 '>{useParams().category.toUpperCase()}</h2>
            <hr className='my-0'/>

        <div className=' container-fluid my-4  '>
        <div  className='     d-flex flex-wrap col-md-11 justify-content-center m-auto'>
        {    
           allproducts.filter((product) => product.category === category).reverse().map((product)=>{ return( <ProductBuyerCard alert={props.alert} id={product._id} key={product._id} image={product.image} title={product.title} category={product.category} price={product.price} quantity={product.quantity}  />) })
        }
        </div>
        </div>
    </div>
        </div>
  )
}

export default CategoryCards
