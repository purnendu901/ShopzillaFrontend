import React from "react";
import { useState } from "react";
import edit from "../images/edit.png";
import del from "../images/delete.png";




const Productsellercard = (props) => {
  

  const [display, setdisplay] = useState('d-none')

  
  const edithandle = async()=>{ 
    setdisplay('d-block')
  }


  const deletehandle = async ()=>{
    const response = await fetch(`https://shopbackend-izge.onrender.com/deleteproduct/${props.id}`, {
      method: "DELETE", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":`${localStorage.getItem("authtoken")}`,
        "Access-Control-Allow-Origin": "*"
      }
    });
    const json = await response.json();
    console.log(json)
    props.alert('danger','The Product has been deleted')
  }



  //TO EDIT FUNCTIONS

  const [title, settitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);
  const [category, setcategory] = useState(props.category);
  const [quantity, setquantity] = useState(props.quantity);
  const [tags, settags] = useState(props.tags);
 




//TO EDIT THE PRODUCT

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   imagefile.current.value = "";
  //   props.alert("success", "Product added successfully");
  // };













  //TO EDIT PRODUCT DETAILS

  const editfunc = async () => {
    const user={title,description,tags,price,quantity,category}
    const response = await fetch(
      `https://shopbackend-izge.onrender.com/updateproduct/${props.id}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("authtoken")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      }
    );
    const json = await response.json();
    console.log(json);
    setdisplay('d-none')
  };




  const changed=()=>{
    setdisplay('d-none')
    setDescription(props.description)
    settitle(props.title)
    setPrice(props.price)
    setquantity(props.quantity)
    setcategory(props.category)
  }


  


  return (
    <div className="mb-2">

   
    <div  className=' sellercardshadow bg-white  d-flex mt-3'>
      
  <div className='col-12 d-flex   justify-content-between '>
    


    


    {/* Part 1 */}
    <div className='imgcardcontainer '>
 <img src={`${props.image}`} className=" imgcard " alt=""/>
    </div>


    
    {/* PART 2 */}
    <div id="middlesellercard" className='me-2 ps-2 '>


    <div className="cardtitle  mb-md-3 mb-2 ">{props.title}</div>
 

    <div className="cardtext "> <span className='rubik fw-semibold'>Price </span> {" : "+props.price + "Rs"} </div>
    <div className="cardtext  rubik fw-semibold">{props.category}</div>

    <div className="  cardtext"> <span className='rubik fw-semibold'>Quantity </span>  {" : "+ props.quantity}</div>
</div>


    {/* PART 3 */}
  <div className='d-flex flex-column position-stick px-3   grey justify-content-around'>
  <img  src={edit} onClick={edithandle} className="icons pointer" alt="" />
  <img onClick={deletehandle} src={del} className="icons pointer" alt="" />
  </div>




  </div>
    </div>








    {/* TO EDIT ITEM INFO */}

   
    <div id="editinto" className={`col-12   fullheight mt-md-0 mt-5 ${display} position-absolute  top-0 end-0 `}>
    {/* <div id="editinto" className={`col-lg-12 bg-dark col-md-9 col-12 fullheight mt-md-0 mt-5 ${display} position-absolute top-0 end-0 `}> */}

      <div className=" col-12 m-0 row bg- fullheight ">
      <div className="col-lg-2 col-md-3 d-none d-md-block  fullheight "></div>
      <div id="editbg" className="col-lg-10  col-md-9 d-flex  fullheight ms-lg- ms-xl-0 ">

        <div className="col-xl-6 col-lg-7 col-md-7  col-10  shadow-lg   m-auto rounded shadowfull rubik bg-white ">
          <div className="d-flex col-10 m-auto pt-3 justify-content-between">
            <h4 className="fw-bold rubik">Update Product</h4>
            <i onClick={changed} className="pointer bi bi-x-circle"></i>
          </div>
          <hr className="mb-3 mt-0" />

          <form className="col-10 mx-auto  " onSubmit={editfunc}>
            <div className="row ">
              <div className="form-group col-6">
                <label htmlFor="productName">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="category">Category:</label>
                <select
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                >
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
              <label htmlFor="exampleFormControlTextarea1">Description:</label>
              <input
                type="text"
                value={description}
                className="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  id="price"
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                  id="quantity"
                />
              </div>
            </div>

            <div className="form-group ">
              <label htmlFor="productName">Enter Search tags:</label>
              <input
                type="text"
                className="form-control"
                value={tags}
                id="productName"
                onChange={(e) => {
                  settags(e.target.value);
                }}
              />
            </div>

            
            <div className="col-12 d-flex justify-content-center ">
              <button type="submit" className=" btn btn-primary my-2">
                Apply Changes{" "}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
   



    </div>
  )
}

export default Productsellercard
