import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Context } from '../Context/Notecontext';


const Accountdetails = () => {

    const context = useContext(Context)
    const {fetchuser,user} = context

    useEffect(() => {
        fetchuser();
        // eslint-disable-next-line
      }, [])

      

  return (
    <div className='container-fluid  fullheight mt-0' >

    <div className='row fullheight' >
      
      <div className=' col-md-3 col-lg-2  '></div>


    <div className="col-md-9 col-12 mx-auto d-flex  fulheight justify-content-center  align-items-center  mt-md-0 mt-4 ">
        


    <div className='col-md-11 col-12 bg-white  rounded shadow sellercontent  height90 '  >
    <h3 className='bg-dark text-white py-2 text-center '>Account Details</h3>


    <div className='d-flex flex-column  col-xl-8  mx-auto col-lg-8 col-md-9 col-11 justify-content-center'>
      
      <div className='col-11   d-flex  my-4 ms-2 justify-content-between'>

    <div className='col-md-3 col-4 col-sm-3 rounded-md  '>
    <img src={user.image} alt="" className='img-fluid rounded-lg shadow'></img>
    </div>

      </div>

    <div className=' d-flex flex-column  sellerinfo mx-2  '>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3  col-3   py-2  '>Name </strong>   <input disabled  className=' border-0.1  col-md-8 col-8 py-2 px-md-4 px-2 ' value={user.name} /> </div>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3  col-3   py-2  '>Gender </strong>   <input disabled  className=' border-0.1  col-md-8 col-8 py-2 px-md-4 px-2 ' value={user.gender} /> </div>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3  col-3   py-2  '>Address </strong>   <input disabled  className=' border-0.1  col-md-8 col-8 py-2 px-md-4 px-2 ' value={user.address} /> </div>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3  col-3   py-2  '>Email id </strong>   <input disabled  className='border-0.1 col-md-8 col-8 py-2 px-md-4 px-2 ' value={user.email} /> </div>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3 col-3   py-2  '>Type </strong>   <input id='type' disabled className=' border-0.1  col-md-8 col-8 py-2 px-md-4 px-2 ' value={user.usertype} /> </div>
        <div className='row my-1 d-flex justify-content-between ' > <strong className='col-md-3  col-3   py-2  '>User ID </strong>   <input disabled className=' border-0.1  col-md-8 col-8 py-2 px-md-4 px-2 '  value={user._id}/> </div>
        <div class="mb-3">
 
  </div>

    </div>


    </div>
    






   



 
    </div>
    </div>
     </div>
  </div>
  )
}

export default Accountdetails
