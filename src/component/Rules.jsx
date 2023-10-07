import React from 'react'

const Rules = () => {
    return (
        <div className='h-[25%] w-[60%] bg-pink pl-5 pt-1 mt-5 text-left space-y-2'>
            <h1 className='text-xl font-bold mt-0'>How to play dice game</h1>
            <ul className='list-disc text-md'>
                <li><p>Select any number</p></li>
                <li><p>Click on dice</p></li>
                <li><p>after click on  dice  if selected number is equal to
                    dice number you will get same point as dice </p></li>
                <li><p>if you get wrong guess then  1 point will be dedcuted </p></li>

            </ul>




        </div>
    )
}

export default Rules
