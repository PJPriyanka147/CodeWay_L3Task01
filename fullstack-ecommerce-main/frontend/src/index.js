import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css';
import CategoriesContextProvider from './components/Context/CatergoriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CategoriesContextProvider>
      <App/>
    </CategoriesContextProvider>

);
