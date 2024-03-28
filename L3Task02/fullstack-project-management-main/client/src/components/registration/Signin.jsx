import React, { useState } from 'react';
import './registration.css';

const Signin = () => {

	const [state, setstate] = useState({
		email:'',
		password:'',
	   });

	   const handleChange = e => {
		setstate({
		  ...state,
		  [e.target.name]:e.target.value,
		});
	   };

  return (
    <div>
      <div className="signup-form">
        <div className="signup-wrapper">
          <form className='form'>
            <h1>Sign In</h1>
          <div className="form-group">
            <input type="email" name="email" id="" placeholder='Enter Email' value={state.email}  onChange={handleChange}/></div>
          <div className="form-group">
            <input type="password" name="password" id="" placeholder='Enter Password' value={state.password}  onChange={handleChange} /></div>
          <button className='signup-button'>Sign In</button>  
                         
         </form>
          

        </div>
      </div>
    </div>
  )
}

export default Signin
