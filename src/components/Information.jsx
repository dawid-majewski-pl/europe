import React from 'react'
import Europe from '../assets/europe.png'

const Information = () => {
    return (
        <div className='bg-white w-full py-16 px-4'>
           <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
                <img className='w-[500px] mx-auto my-4' src={Europe} alt="Europe Map" />
                <div className='flex flex-col justify-center items-center md:items-start gap-3'>
                    <p className='bg-green-400 w-fit px-2 py-1 rounded-md text-white font-bold'>See the most beautiful places in Europe</p>
                    <h2 className='text-2xl font-bold py-2 md:text-3xl xl:text-4xl'>Gallery and descrtiptions</h2>
                    <p className='text-justify max-w-[80vw] sm:max-w-[60vw] md:max-w-[500px]'>This website contains photos and informations about countries of Europe. You can see different cultures and learn something about old continent.</p>
                    <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>See Countries</button>
                </div>
           </div>
        </div>
    )
}

export default Information;