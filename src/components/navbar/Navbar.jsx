import React from 'react'
import { Link } from 'react-router-dom'
import { Logo1 } from '../../assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={Logo1} alt="logotip" />
      </Link>

      <ul className='nav_list'>
        <li className='nav_list_item'><Link className='nav_list_item_link' to='/'>Our Menu</Link></li>
        <li className='nav_list_item'><Link className='nav_list_item_link' to='/about'>OurTours</Link></li>
      </ul>
    </div>
  )
}

export default Navbar