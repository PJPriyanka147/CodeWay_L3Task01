import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import LoginSignup from './LoginSignup'

const AppLayout = ({ children }) => {
    return (
       <>
            <Navbar />
            <div className=' w-screen flex h-screen'  >
                <div className="w-[220px]">
                    <Sidebar />
                </div>
                <div className="flex-1 ">
                    <div className="flex ">
                        {children}
                    </div>
                </div>
            </div>
            </>
       
    )
}

export default AppLayout