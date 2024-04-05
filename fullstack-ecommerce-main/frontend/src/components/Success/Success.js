import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <>
    <div className='top-container'>
    <div class="container">
    <div class="printer-top"></div>

    <div class="paper-container">
        <div class="printer-bottom"></div>

        <div class="paper">
            <div class="main-contents">
                <div class="success-icon">&#10004;</div>
                <div class="success-title">
                    Payment Complete
                </div>
                <div class="success-description">
                    Thank you for completing the payment! You will shortly receive an email of your payment.
                </div>
                <div class="order-details">
                    <div class="order-number-label">Transaction ID</div>
                    <div class="order-number">123456789</div>
                    <div class="complement">Thank You!</div>
                </div>
            </div>
            <div class="jagged-edge"></div>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default Success