import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location= useLocation()
  return (
    <footer className={`${location.pathname==='/'?'d-block':'d-none'}`}>
    <div className="container-fluid">
      <div className="row container m-auto">
        <div className="col-md-4">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@shopzilla.com</li>
            <li>Phone: +1 (555) 555-5555</li>
            <li>Address: 123 Main Street, City, State ZIP</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="/"><i className="bi bi-facebook"></i></a></li>
            <li><a href="/"><i className="bi bi-twitter"></i></a></li>
            <li><a href="/"><i className="bi bi-instagram"></i></a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Subscribe to Our Newsletter</h4>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Enter your email address"/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr/>



      <div className="row">
        <div className="col-12 bg-black text-center">
          <p className='fw-bold py-2'>&copy; 2023 <span className='text-warning'> ShopZilla</span> . All Rights Reserved.</p>
        </div>
      </div>





    </div>
  </footer>
  )
}

export default Footer
