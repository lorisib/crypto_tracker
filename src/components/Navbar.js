import React from 'react'
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {

  return (
    <Link to='/'>
    <div>
        <div className='Navbar'>
            <FaCoins className='icon' />
            <h1> Coin <span className='purple'> Search</span></h1>
        </div>

    </div>
    </Link>
  )
}

export default Navbar