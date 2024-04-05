import React from 'react';
import './Cancel.css';

const Cancel = () => {
  return (
    <>
      <div className='payment-failed-top-container'>
        <div className="payment-failed-container">

          <div class="failed-main-contents">
            <div class="failed-icon">&#x2715;</div>
            <div class="failed-title">
              Payment Failed
            </div>
            <div class="failed-description">
              <h4>Sorry, your payment was not successful.</h4>
              <p>Please try again later or contact customer support for assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cancel
