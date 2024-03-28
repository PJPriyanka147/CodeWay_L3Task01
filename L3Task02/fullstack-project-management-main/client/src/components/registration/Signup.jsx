import React, { useState } from 'react';
import './registration.css';
import {useDispatch} from 'react-redux';
import { register } from '../../../../server/controllers/authController';

const Signup = () => {

  const dispatch = useDispatch();
  const [state, setstate] = useState({
    email:'',
    password:'',
    username: '',
   });

   const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        username:state.username,
        password:state.password,
        email:state.email,

      })
    )
   };
   const handleChange = e => {
    setstate({
      ...state,
      [e.target.name]:e.target.value,
    });
   };
   console.log(state.username);

  return (
    <div>
      <div className="signup-form">
        <div className="signup-wrapper">
          <form className='form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
             <div className="form-group">
            <input type="text" placeholder='Enter name' name='username' value={state.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" id="" placeholder='Enter Email' value={state.email} onChange={handleChange} /></div>
          <div className="form-group">
            <input type="password" name="password" id="" placeholder='Enter Password' value={state.password}  onChange={handleChange}/></div>
          <button className='signup-button'>Sign Up</button>              
         </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
