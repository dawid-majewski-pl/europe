import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-300'>
            <div className='text-center'>
                <h2 className='text-green-400 text-6xl md:text-7xl font-bold uppercase pb-8'>Europe</h2>
                <p className='py-4'>Awesome places to see in old world.</p>
                <div className='grid grid-cols-3 justify-items-center mx-auto my-6'>
                <FaFacebookSquare className='duration-300 hover:text-green-400' size='30'/>
                <FaInstagram className='duration-300 hover:text-green-400' size='30'/>
                <FaTwitterSquare className='duration-300 hover:text-green-400' size='30'/>
                </div>
            </div>
            <div className='grid grid-cols-3 justify-items-center'>
                <div className='font-medium text-center'>
                    <h3 className='text-orange-500 pb-4'>Europe Main Website</h3>
                    <ul>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Home</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Information</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Countries</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>About</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Contact</li>
                    </ul>
                </div>
                <div className='font-medium text-center'>
                    <h3 className='text-orange-500 pb-4'>Countries</h3>
                    <ul>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>United Kingdom</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Spain</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Norway</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Ireland</li>
                    </ul>
                </div>
                <div className='font-medium text-center'>
                    <h3 className='text-orange-500 pb-4'>Countries</h3>
                    <ul>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Germany</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>France</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Sweeden</li>
                        <li className='py-2 text-sm duration-300 hover:text-green-400'>Greece</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;