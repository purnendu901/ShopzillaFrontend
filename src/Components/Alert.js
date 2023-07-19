import React from 'react'


const Alertcomponent = (props) => {

  return (
    <div id="alert-container ">
    <div id="alert" className={` col-lg-6 col-md-8 col-11 start-50 translate-middle-x ${props.display} `}>
      <div  className={`alert alert-${props.type} justify-content-center d-flex align-items-center`} role="alert">
        <i className="bi bi-info-circle-fill me-2"></i>
        <div >{props.message}</div>
      </div>
    </div>
  </div>
  )
}

export default Alertcomponent
