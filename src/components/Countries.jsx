import React from 'react'
import London from '../assets/london.jpg'

const Countries = () => {
    return (
        <div className='w-full px-4 bg-slate-300'>
            <h2 className='text-gray-800 pt-[4rem] text-4xl text-center font-bold'>Countries</h2>
            <div className='py-[4rem] max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center'>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>United Kingdom</h3>
                        <p className='text-gray-700 pb-2'>Let's start from London</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit UK</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Spain</h3>
                        <p className='text-gray-700 pb-2'>Hola, Barcelona!</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Spain</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Norway</h3>
                        <p className='text-gray-700 pb-2'>Welcome to cold and nice Oslo</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Norway</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Ireland</h3>
                        <p className='text-gray-700 pb-2'>Calm green place</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Ireland</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Germany</h3>
                        <p className='text-gray-700 pb-2'>Let's start from London</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit UK</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>France</h3>
                        <p className='text-gray-700 pb-2'>Hola, Barcelona!</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Spain</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Sweeden</h3>
                        <p className='text-gray-700 pb-2'>Welcome to cold and nice Oslo</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Norway</button>
                    </div>
                </div>
                <div className='h-fit bg-white w-full border rounded-xl overflow-hidden'>
                    <img className='w-full' src={London} alt='/' />
                    <div class='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold text-center pt-4 pb-2'>Greece</h3>
                        <p className='text-gray-700 pb-2'>Calm green place</p>
                        <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Visit Ireland</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries;