import React from 'react'
import PirateLogo from './pirate-king-high-resolution-logo-removebg-preview.png'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
        <div className='header-container'>
            <div className='nav-bar'>
              <Link to="/"><img src={PirateLogo} alt="logo" height="120px" width="180px"/></Link>
            </div>
            
        </div>
    </>
  )
}

export default Header