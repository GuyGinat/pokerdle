import React, {useState, useEffect} from 'react'

export default function CardGrid({cards, round, winning}) {

    const [showCards, setshowCards] = useState([...cards.slice(0, round * 5)])
    useEffect(() => {
        setshowCards([...cards.slice(0, round * 5)])
        // winning(round)
    }, [round])
    useEffect(() => {
        winning()
        // code to run after render goes here
      });
  return (
      <div className=' w-8/12 mx-auto'>
        <div className=' grid grid-cols-5 gap-y-2 gap-x-2 mt-8'>
            {showCards.map(c => {
                return (
                    <div key={c.value+c.suit} className='text-base font-normal h-44 w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
                        <p className='h-6'>{c.value} {c.suit}</p>                    
                    </div>
                )
            })}        
        </div>
      </div>

  )
}
