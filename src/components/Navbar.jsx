import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4'>
            <h1 className='w-full text-3xl font-bold text-green-400'>Europe</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Information</li>
                <li className='p-4'>Countries</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-950 bg-opacity-90 ease-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <h2 className='w-full text-3xl font-bold text-green-400 mx-4 my-8'>Europe</h2>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-b-gray-800'>Home</li>
                    <li className='p-4 border-b border-gray-800'>Information</li>
                    <li className='p-4 border-b border-gray-800'>Countries</li>
                    <li className='p-4 border-b border-gray-800'>About</li>
                    <li className='p-4 border-b border-gray-800'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar