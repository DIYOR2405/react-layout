import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <ul className='side_list'>
          <li className='side_list_item'><Link className='side_list_item_link' to='tommy/'>Tommy</Link>
          </li>
          <li className='side_list_item'><Link className='side_list_item_link' to='/drop'>Bigdrop</Link></li>
          <li className='side_list_item'><Link className='side_list_item_link' to='/cuker'>Cuker</Link></li>
       </ul>
    </div>
  )
}

export default Sidebar