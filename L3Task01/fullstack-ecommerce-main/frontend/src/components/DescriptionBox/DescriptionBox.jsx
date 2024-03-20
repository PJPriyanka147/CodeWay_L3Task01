import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and 
          selling of goods and services over the internet. These websites provide a virtual 
          marketplace where businesses showcase their products or services, and customers can
           browse, select, and purchase items with ease. E-commerce websites offer a convenient
            shopping experience, allowing users to shop from the comfort of their homes or on-the-go
             via mobile devices. They typically include features such as product listings, search functionality, 
             shopping carts, secure payment gateways, and order tracking systems.</p>
      </div>
    </div>
  )
}

export default DescriptionBox