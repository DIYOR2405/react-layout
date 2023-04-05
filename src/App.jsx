import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Drop from './components/sidebar/bigdrop/Drop';
import Cuker from './components/sidebar/cuker/Cuker';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/Ui/container/index'
import Layout from './Layout/Layout';
import About from './pages/About/About';
import Tommy from './components/sidebar/tommy/Tommy'
import Home from './pages/Home/Home';

const App = () => {
   return (

      <Container>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<Home/>} />
               <Route path='/about' element={<About />} />
               <Route path='/tommy' element={<Tommy />} />
               <Route path='/drop' element={<Drop />} />
               <Route path='/cuker' element={<Cuker />} />
            </Route>
         </Routes>
         <Routes path='/' element={<Sidebar />}>

         </Routes>


      </Container>
   )
}

export default App;