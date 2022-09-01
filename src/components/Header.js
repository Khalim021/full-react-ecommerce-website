import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";

const Header = () => {

  return (
    <nav className='main-header__container'>
      <Link to='/'>
        <img className='logo' src='/images/logoa.svg' alt='logo'/>
      </Link>
      <div className='header-items'>
        <Link to='/' className='header-item'>
          <span className='nav-item'>Home</span>
        </Link>
        <Link to='/shop' className='header-item'>
          <span className='nav-item'>Shop</span>
        </Link>
        <Link to='/compus' className='header-item'>
          <span className='nav-item'>Compus</span>
        </Link>
        <Link to='/blog' className='header-item'>
          <span className='nav-item'>Blog</span>
        </Link>
        <Link to='/about' className='header-item'>
          <span className='nav-item'>About</span>
        </Link>
        <Link to='/contact' className='header-item'>
          <span className='nav-item'>Contact</span>
        </Link>
        <div className='header-input'>
          <input type='text' placeholder='Search...'/>
          <button type='submit'>Search</button>
        </div>
      </div>
      <Link to='/basket' ><FaShopify className='basket' />
        <span className='basket-info'>2</span>
      </Link>
    </nav>
  )
}

export default Header