import React from 'react'

export default function PlayerHand({playerCards}) {


  return (
    <div className='flex flex-row justify-center'>
        <div className='text-base font-normal h-44 w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
            <p className='h-6'>{playerCards[0].value} {playerCards[0].suit}</p> 
        </div>    
        <div className='text-base font-normal h-44 w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
            <p className='h-6'>{playerCards[1].value} {playerCards[1].suit}</p> 
        </div>    
    </div>
  )
}
