import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar h-20 bg-indigo-500 flex justify-between items-center">
       <h1 class="text-3xl font-light text-white py-5 px-5">Project Planner</h1>
        <div className="flex gap-5 my-2 mx-5">
          
            <Link to='/'><button className='w-24 h-10  bg-white outline-none px-2 border border-gray-500 rounded-md text-base'>Sign Out</button></Link>
        </div>
        </div>
  )
}

export default Navbar