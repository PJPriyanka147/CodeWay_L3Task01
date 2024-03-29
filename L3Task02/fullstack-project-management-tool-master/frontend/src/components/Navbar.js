import React from 'react';

const Navbar = () => {
  return (
    <div class="navbar h-18 bg-indigo-500 flex justify-between items-center">
       <h1 class="text-3xl font-light text-white py-5 px-5">Project Planner</h1>
        <div className="flex gap-5 my-2 mx-5">
            <button className='w-24 h-10 bg-white outline-none px-2 border border-gray-500 rounded-md text-base'>Sign In</button>
            <button className='w-24 h-10  bg-white outline-none px-2 border border-gray-500 rounded-md text-base'>Sign Out</button>
        </div>
        </div>
  )
}

export default Navbar