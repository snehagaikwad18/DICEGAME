import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen w-screen bg-white items-center justify-center flex'>
            <div className=' h-[70%] w-[90%] flex'>
                <div className='w-[50%] h-full'>
                    <img src="dices 1.png" alt="Dice" />
                </div>
                <div className=' h-full w-[50%] flex justify-center items-center'>
                    <div className='h-[25%] w-[49%] text-right space-y-5'>

                        <h1 className='text-black text-6xl font-extrabold'>DICE GAME</h1>

                     <Link to='/gamepage'><button className='w-[40%] h-[30%] rounded-sm bg-black text-white' >Play Now</button></Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
