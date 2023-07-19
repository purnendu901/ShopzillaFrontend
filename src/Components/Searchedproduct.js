import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchedProdcard from './SearchedProdcard';
import Spinner from './spinner';
import searchicon from "../images/search.png"
import { useNavigate } from 'react-router-dom';

const Searchedproduct = (props) => {
  const [products, setProducts] = useState([]);
  const { query } = useParams();
const [loading, setloading] = useState('d-none')

  useEffect(() => {
    const handleSearch = async () => {
      try {
     
        setloading('d-block')
        const response = await fetch(`https://shopbackend-izge.onrender.com/products/search?tags=${query}`);
        const data = await response.json();
        
        setloading('d-none')
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleSearch();
  }, [query]);




    //for search
    const navigate = useNavigate()

  const [searchTag, setSearchTag] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    navigate(`/search/${searchTag}`)
  }




  return (
    <div className=' d-flex flex-wrap fullheight'>


      {/* SEARCHBAR BIG */}
    <div className={`col-11 m-auto  my-3 d-md-none justify-content-center ${loading==='d-none'?'d-flex':'d-none'} `}>
      <div className="input-group p-0 ">
    <input type="text" className="form-control" onChange={(event) => setSearchTag(event.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-icon"/>
    <span className=" bg-light searchbaricon" id="search-icon">
      <img src={searchicon} alt="" onClick={handleSearch} className='searchicon pointer' />
    </span>
</div>
    </div>
      {/* SEARCHBAR BIG */}


<div className={`${loading}`}>
      <Spinner />
            </div>

    <div id='' className={`container justify-content-center ${loading==='d-none'?'d-block':'d-none'}`}>
    {/* <div> {products.length} </div> */}
    
    {
        products.map((product)=>{ return( <SearchedProdcard alert={props.alert} id={product._id} description={product.description} key={product._id} image={product.image} title={product.title} category={product.category} price={product.price} quantity={product.quantity}  />) })
    }
    </div>
  
</div>
  );
};

export default Searchedproduct;