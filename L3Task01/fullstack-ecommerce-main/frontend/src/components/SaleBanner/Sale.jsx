import React from 'react';
import './Sale.css';

const Sale = () => {
  return (
    <div className='sale'>
       <div className="col-01">
        <img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       <div className="col-02">
        <h1>20% <br />Off</h1>
       </div>
       <div className="col-03">
        <img src="https://images.unsplash.com/photo-1602303894456-398ce544d90b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
    </div>
  )
}

export default Sale