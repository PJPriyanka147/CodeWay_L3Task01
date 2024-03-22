import React from 'react';
import './Admin.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';

const admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default admin