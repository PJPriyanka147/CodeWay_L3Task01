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
        <a href="#" ><i className="fab fa-facebook "></i></a>
            <a href="#" ><i className="fab fa-twitter "></i></a>
            <a href="#" ><i className="fab fa-pinterest "></i></a>
            <a href="#" ><i className="fab fa-whatsapp "></i></a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
