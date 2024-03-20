import React from 'react'
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Homepage from './Pages/Homepage';
import Categories from './Pages/Categories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';



const App = () => {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/women' element={<Categories  banner={women_banner} category="women"/>}/>
      <Route path='/men' element={<Categories banner={men_banner}  category="men"/>}/>
      <Route path='/children' element={<Categories banner={kids_banner} category="children"/>}/>
      <Route path='/accessories' element={<Categories category="accessories"/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>  
     
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App