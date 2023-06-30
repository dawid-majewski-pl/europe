import React from 'react'
import Typed from 'react-typed';

const Home = () => {
    return (
        <div className='text-white'>
           <div className='max-w=[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className= 'text-orange-500 uppercase md:text-xl'>Here is knowledge about</p>
                <h2 className='text-green-400 text-6xl md:text-7xl font-bold uppercase pb-8'>Europe</h2>
                <div>
                    <p className='text-xl md:text-3xl'>Awesome places to see in old world.</p>
                    <div className='py-8'>
                        <Typed className='text-xl md:text-2xl' strings={[
                            "Aland Islands","Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Czech Republic","Denmark","Estonia","Faroe Islands","Finland","France","Germany","Gibraltar","Greece","Guernsey","Holy See (Vatican City State)","Hungary","Iceland","Ireland","Isle of Man","Italy","Jersey","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia, the Former Yugoslav Republic of","Malta","Moldova, Republic of","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","San Marino","Serbia","Serbia and Montenegro","Slovakia","Slovenia","Spain","Svalbard and Jan Mayen","Sweden","Switzerland","Ukraine","United Kingdom"
                        ]} typeSpeed={40} backSpeed={40} loop/>
                    </div>
                </div>
                <button className='bg-green-400 text-black w-[200px] uppercase rounded-md font-medium my-6 mx-auto py-3 duration-300 top-0 hover:scale-110 relative hover:top-2'>Let's go!</button>
           </div>
        </div>
    )
}

export default Home;