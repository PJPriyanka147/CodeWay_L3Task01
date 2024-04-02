import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletterwrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icon">
        <i className="fab fa-facebook "></i>
            <i className="fab fa-twitter "></i>
            <i className="fab fa-pinterest "></i>
           <i className="fab fa-whatsapp "></i>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
