import React, { useState } from 'react'
import styled from 'styled-components';
import Rules from './Rules';

const GamePage = () => {
    const [selectedNum, setSelectedNum] = useState()
    const [score, setscore] = useState(0);
    const [error, setError] = useState("");
    const arrNum = [1, 2, 3, 4, 5, 6];
    const [currentDice, setcurrentDice] = useState(1);
    const [showRules,setShowRules]=useState(false)


    const generateRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const numberSelectorHandler = (val) => {
        setSelectedNum(val);
        setError(" ");
    }

    const resetScore = () => {
        setscore(0)
    }

    const rolDice = () => {
        if (!selectedNum) {
            return setError("You have not selected any number")
        }
        setError("")
        const randomNumber = generateRandomNum(1, 7);
        setcurrentDice((prev) => randomNumber);
        if (selectedNum === randomNumber) {
            setscore((prev) => prev + randomNumber)
        } else {
            setscore((prev) => prev - 1)
        }

        setSelectedNum(undefined)
    }


    return (
        <div className='h-screen w-screen  flex items-center justify-center'>
            <div className='h-[80%] w-[80%] bg-white'>
                <div className='h-[20%] w-full bg-white flex justify-between '>
                    <div className='h-full w-auto text-center'>
                        <h1 className='text-6xl font-bold'>{score}</h1>
                        <p className='font-semibold text-2xl'>Total Score</p>

                    </div>
                    <div className='w-auto h-full'>
                        <p className='text-right text-red-600 text-lg'>{error}</p>
                        <div className='flex gap-4 h-[60%]'>
                            {arrNum.map((val, i) => (
                                <Box isSelected={val === selectedNum} key={i} onClick={() => { numberSelectorHandler(val) }} className={'h-[90%] w-[80px] text-2xl font-bold border border-black justify-center items-center flex text-black hover:bg-black hover:text-white bg'}>{val}</Box>
                            ))}


                        </div>
                        <p className='text-right font-semibold text-2xl'>Select Number</p>
                    </div>
                </div>
                <div className='h-[60%] w-full flex justify-center items-center mt-5 '>
                    <div className='h-full w-[30%] flex items-center justify-center   '>
                        <div className='space-y-3 h-full w-[50%] text-center '

                        >
                            <div onClick={rolDice} className=''>

                                <img className='cursor-pointer' src={`dice_${currentDice}.jpg`} alt="dice1" />
                            </div>
                            <p className='font-medium text-lg'>Click on Dice to roll</p>
                            <button onClick={resetScore} className='w-[87%] h-[10%] text-sm rounded-md bg-white border border-black font-bold hover:bg-black hover:text-white'>Reset Score</button>
                            <button onClick={()=>setShowRules((prev)=>!prev)} className='w-[87%] h-[10%] text-sm rounded-md bg-black text-white border border-black font-bold hover:bg-white hover:text-black'>{showRules?"Hide":"Show"} Rules</button>

                            
                        </div>

                    </div>
                       
                </div>
                {showRules && <Rules/>} 
            </div>
        </div>
    )
}

export default GamePage;
const Box = styled.div`
    background-color:${(props) => props.isSelected ? "black" : "white"};
    color:${(props) => (!props.isSelected ? "black" : "white")};
    
 `