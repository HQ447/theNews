import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'

function Nav() {
    const [isActive, setActive] = useState("l")
    // Get Pakistan time



    return (
        <div className='flex flex-col  py-4 gap-4 px-20 shadow-[0_4px_6px_rgba(0,0,0,0.1)] mb-6' >
            <div className='flex justify-center items-center gap-2'>
                {/* <h1 className='font-urdu-kasheeda text-4xl font-bold text-gray-600'>دی کوہاٹ</h1> */}
                <img src={logo} alt="logo" className='w-26 h-14' />

            </div>
            <hr className='border-gray-200 ' />
            <div className='flex justify-center flex-row-reverse items-center gap-4 '>

                <NavLink to="/" onClick={() => setActive("l")} className={` ${isActive == "l" ? "text-red-600 font-bold" : "text-gray-500"} font-urdu-kasheeda hover:bg-amber-600 px-3 py-1 rounded-md  hover:text-white transition-all duration-300  text-2xl transition-all animate-pulse  `}>تازہ ترین</NavLink>
                <NavLink to="/pakistan" onClick={() => setActive("p")} className={`${isActive == "p" ? "text-red-600 font-bold" : "text-gray-500"} font-urdu-kasheeda hover:bg-amber-600 px-3 py-1 rounded-md  hover:text-white     transition-all duration-300  text-2xl `}>پاکستان</NavLink>
                <NavLink to="/entertainment" onClick={() => setActive("e")} className={`${isActive == "e" ? "text-red-600 font-bold" : "text-gray-500"} font-urdu-kasheeda hover:bg-amber-600 px-3 py-1 rounded-md  hover:text-white transition-all duration-300  text-2xl `}>اینٹرٹینمنٹ</NavLink>
                <NavLink to="/sports" onClick={() => setActive("s")} className={`${isActive == "s" ? "text-red-600 font-bold" : "text-gray-500"} font-urdu-kasheeda hover:bg-amber-600 px-3 py-1 rounded-md  hover:text-white transition-all duration-300  text-2xl`}>کھیل</NavLink>
                <NavLink to="/world" onClick={() => setActive("w")} className={` ${isActive == "w" ? "text-red-600 font-bold" : "text-gray-500"} font-urdu-kasheeda hover:bg-amber-600 px-3 py-1 rounded-md  hover:text-white transition-all duration-300  text-2xl `}>دنیا</NavLink>
                <NavLink to="/login" className={" bg-indigo-500 font-sans text-white px-3 py-2 rounded-md  text-sm "}>Login</NavLink>
            </div>
        </div>
    )
}

export default Nav