import React from 'react'
import Sub_single from '../assets/sub-1.png'
import Sub_pair from '../assets/sub-2.png'
import Sub_group from '../assets/sub-3.png'

const Subscription = () => {
    return (
        <div className='w-full p-4 bg-white pb-[6rem]'>
            <h2 className='pt-[4rem] text-4xl text-center font-bold'>Subscribe</h2>
            <div className='max-w-[1240px] pt-[6rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='shadow-xl rounded-xl p-4 w-[70%] sm:w-[50%] m-auto lg:w-full flex flex-col items-center my-4 duration-300 hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Sub_single} alt='/' />
                    <h3 className='text-2xl font-bold text-center py-8'>Only for you</h3>
                    <p className='text-center font-bold text-3xl'>£9,99</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>Access to all countries</p>
                        <p className='py-2 border-b mx-8'>Special trip offers</p>
                        <p className='py-2 border-b mx-8'>More beautiful pictures free to use</p>
                    </div>
                    <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Subscribe</button>
                </div>
                <div className='shadow-xl rounded-xl p-4 w-[70%] sm:w-[50%] m-auto lg:w-full flex flex-col items-center my-4 duration-300 hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Sub_pair} alt='/' />
                    <h3 className='text-2xl font-bold text-center py-8'>For two</h3>
                    <p className='text-center font-bold text-3xl'>£14,99</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>Access to all countries</p>
                        <p className='py-2 border-b mx-8'>Trip offers for two</p>
                        <p className='py-2 border-b mx-8'>More beautiful pictures free to use</p>
                    </div>
                    <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Subscribe</button>
                </div>
                <div className='shadow-xl rounded-xl p-4 w-[70%] sm:w-[50%] m-auto lg:w-full flex flex-col items-center my-4 duration-300 hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Sub_group} alt='/' />
                    <h3 className='text-2xl font-bold text-center py-8'>For you and two</h3>
                    <p className='text-center font-bold text-3xl'>£19,99</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>Access to all countries</p>
                        <p className='py-2 border-b mx-8'>Group trips up to 30% off</p>
                        <p className='py-2 border-b mx-8'>Special storage for your trip photos</p>
                    </div>
                    <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Subscribe</button>
                </div>
            </div> 
        </div>
    )
}

export default Subscription;