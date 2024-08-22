import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{width:'400px'}}>
          <h5 className='textStyle'><i class="fa-solid fa-video text-warning me-3"></i>Media Player</h5>
          <p style={{textAlign:'justify'}}className='textStyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Etiam in metus ac nisl commodo consectetur. Maecenas sit amet commodo libero.
          </p>
        </div>
        <div className='d-flex flex-column ms-5'>
          <h4 className='textStyle'>Links</h4>
          <Link to = '/' style={{textDecoration:'none',color:'white'}}>
          Landing Page
          </Link>
          <Link to = '/home'style={{textDecoration:'none',color:'white'}} >
          Home Page
          </Link>
          <Link to = '/watch' style={{textDecoration:'none',color:'white'}}>
          Watch History
          </Link>
        </div>
        <div className='d-flex flex-column ms-5'>
        <h4 className='textStyle'>Links</h4>
          <Link to = 'https://react.dev/' style={{textDecoration:'none',color:'white'}}>
          React
          </Link>
          <Link to = 'https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'white'}} >
          React Bootstrap
          </Link>
          <Link to = '/watch' style={{textDecoration:'none',color:'white'}}>
          Json Server
          </Link>
        </div>
        <div className='ms-5'>
          <h4 className='textStyle'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email Id' />
            <button className='btn btn-warning ms-2'>SUBSCRIBE</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
            <Link style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-reddit fa-2x "></i>
            </Link>
            </div>
            
        </div>
        <div>
          <h4>Guides</h4>
        </div>
        <div>
          <h4>Contact US</h4>
        </div>

      </div>
    </div>
  )
}

export default Footer