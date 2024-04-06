import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Homepage from './Pages/Homepage';
import Categories from './Pages/Categories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import AllProduct from './components/AllProduct/AllProduct';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';

const App = () => {
  
  // Ensure that useLocation() is used within the component wrapped by Router
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {

  const location = useLocation();

  // Determine whether to show Navbar and Footer based on the current location
  const showNavbarAndFooter = location.pathname !== '/success' && location.pathname !== '/cancel';

  return (
    <div>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/women' element={<Categories banner={women_banner} category="women" />} />
        <Route path='/men' element={<Categories banner={men_banner} category="men" />} />
        <Route path='/children' element={<Categories banner={kids_banner} category="children" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/allproduct' element={<AllProduct />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
