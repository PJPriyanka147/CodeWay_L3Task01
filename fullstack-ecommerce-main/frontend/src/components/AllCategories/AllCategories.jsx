import React from 'react';
import './AllCategories.css';

const AllCategories = () => {
  return (
    <div className='allcategories'>
      <div className="col-1">
        <div className="row-1">
          <img src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <button>Men</button>
        </div>
        <div className="row-2">
        <img src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <button>Accessory</button>
        </div>
      </div>
      <div className="col-2">
        <img src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <button>Women</button>
      </div>
      <div className="col-3">
        
        <div className="col-3-row-1">
          <div className="col-3-row-1-col-1">
            <img src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <button>Shoes</button>
          </div>
          <div className="col-3-row-1-col-2">
          <img src="https://plus.unsplash.com/premium_photo-1697612943485-ea9923b1daaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <button>Children</button>
          </div>
        </div>
        <div className="col-3-row-2">
          <img src="https://plus.unsplash.com/premium_photo-1667520524170-f7f44b5b0376?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <button>Sale</button>
        </div>
      </div>
    </div>
  )
}

export default AllCategories