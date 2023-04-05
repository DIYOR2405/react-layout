import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'


const Layout = () => {
  return (
    <div className='wrapper'>

      <Navbar />
      <div className='layourr'>


        <Sidebar /> {<Outlet />}
      </div >

      <Footer />
    </div>
  )
}

export default Layout