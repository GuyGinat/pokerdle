import React from 'react'
import Card from './Card'


export default function PlayerHand({playerCards}) {


  return (
    <div className='flex flex-row justify-center'>
        <Card card={playerCards[0]} />
        <div className='text-xs md:text-base font-normal h-20 w-12 md:h-44 md:w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
            <p className='h-6'>{playerCards[0].value} {playerCards[0].suit}</p> 
        </div>    
        <div className='text-xs md:text-base font-normal h-20 w-12 md:h-44 md:w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
            <p className='h-6'>{playerCards[1].value} {playerCards[1].suit}</p> 
        </div>    
    </div>
  )
}
