import React , {useState} from 'react';
import { Context } from '../Context/Notecontext';
import { useContext } from 'react';
import { useRef } from 'react';




const Addproduct = (props) => {

  const imagefile = useRef();

  const context = useContext(Context);
  const {addproduct} = context;

  const [title, settitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setcategory] = useState('');
  const [quantity, setquantity] = useState('');
  const [tags, settags] = useState('');
  const [image, setImage] = useState(null);



  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(reader.result);
    }
  }

  const imgchange = (e)=>{const file = e.target.files[0];
                            console.log(file)
                            setFileToBase(file);}

  const handleSubmit = async (event) => {
    event.preventDefault();
    // create a new FormData object to hold the form data, including the image file
    const user = {title,image,description,quantity,price,category,tags}
    


    // send a POST request to add a product using the contextAPI function
   addproduct("https://shopbackend-izge.onrender.com/addproduct",user);


   // Clear the values to the text
   setDescription('')
   settitle('')
   settags('')
   setcategory('')
   setPrice('')
   setquantity('')
  
   imagefile.current.value = '';
   props.alert('success','Product added successfully')


  }

 

  return (
    <div className='container-fluid fullheight mt-0' >

    <div className='row fullheight' >
      
     <div className=' col-md-3 col-lg-2  '></div>


    <div className="col-md-9 col-12 mx-auto d-flex  fulheight justify-content-center  align-items-center  mt-md-0 mt-4  ">
        
    <div className='col-md-11 col-12 bg-white m-auto rounded shadow rubik height90'  >
    <h3 className='bg-dark text-white py-2 text-center rounded-top poppins'>Add Product</h3>




    <form className='col-xl-8 col-lg-9 col-md-10 col-11 mx-auto  mt-4' onSubmit={handleSubmit}>


      <div className='row '> 

      <div className="form-group col-6">
        <label htmlFor="productName">Product Name:</label>
        <input type="text" className="form-control" id="productName" value={title} required onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter product name"/>
      </div>
      
      <div className="form-group col-6">
        <label htmlFor="category">Category:</label>
        <select className="form-control" id="category" value={category} required onChange={(e)=>setcategory(e.target.value)} >
          <option value="">--Select a category--</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="education">education</option>
          <option value="home">Home</option>
          <option value="sports">Sports</option>
          <option value="food">Food</option>
        </select>
      </div>
      </div>



      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1" >Description:</label>
        <textarea rows="2" type="textarea" value={description} required className="form-control" id="exampleFormControlTextarea1" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter Description"/>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="number" className="form-control" value={price} required onChange={(e)=>{setPrice(e.target.value)}}  id="price" placeholder="Enter price"/>
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" className="form-control" value={quantity} required onChange={(e)=>{setquantity(e.target.value)}} id="quantity" placeholder="Enter quantity"/>
      </div>

      <div className="form-group ">
        <label htmlFor="productName">Enter Search tags:</label>
        <input type="text" className="form-control" value={tags} id="productName"  onChange={(e)=>{settags(e.target.value)}} placeholder="Enter tags Ex-tag1,tag2,tag3"/>
      </div>

      <div className="mb-3">
     <label htmlFor="formFile" className="form-label">Upload the image of the product : </label>
     <input 
     
    ref={imagefile} required
      onChange={imgchange}
      className="form-control" type="file" id="image"/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>



 
    </div>
    </div>
     </div>
  </div>
  );
};

export default Addproduct
